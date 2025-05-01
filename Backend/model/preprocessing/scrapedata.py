import requests
from bs4 import BeautifulSoup
from langchain.chat_models import ChatOpenAI
from langchain.schema import SystemMessage, HumanMessage
import pandas as pd
import os
import io
import re
import time

# openai api key
os.environ["OPENAI_API_KEY"] = "OPENAI_API_KEY"  # Replace with your key

# link
listing_url = "https://toursinindia.in/tour-packages-in-india.php"
base_url = "https://toursinindia.in"

# to get a list of all tour packages
listing_resp = requests.get(listing_url)
soup = BeautifulSoup(listing_resp.text, "html.parser")

# all link visits
links = []
for a in soup.select("a[href*='/tours-india/']"):
    href = a.get("href")
    if href and href.endswith(".php"):
        full_url = base_url + href if not href.startswith("http") else href
        if full_url not in links:
            links.append(full_url)

print(f"Found {len(links)} tour packages.")

# model initialization
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)

# Pcollection for a row 
csv_rows = []

# process each tour packages , from the main listing page
for url in links:
    print(f"Processing: {url}")
    try:
        detail_resp = requests.get(url)
        detail_soup = BeautifulSoup(detail_resp.text, "html.parser")
        text_content = detail_soup.get_text(separator="\n", strip=True)

        system_msg = SystemMessage(content=f"""
You are a travel assistant AI. Analyze the following travel itinerary text. The itinerary may include sections like "Day 1", "Day 2", etc.

Extract and return the following:

1. A single CSV line in this format:
name,category,highlights,duration,price

- name: Title of the travel package (if not available, infer a short name based on the destination or theme)
- category: Choose the most fitting from: Adventure, Nature, Heritage, Spiritual, Leisure, Wildlife, Beach, Cultural
- highlights: List the top 3 attractions or experiences (summarized as short phrases, comma-separated)
- duration: Total number of days (based on the itinerary)
- price: Approximate cost in INR (if not mentioned, return 'N/A')

2. A breakdown of the itinerary by day in this format:
Day 1: [summary of activities]
Day 2: [summary of activities]
...
(Continue for as many days as appear in the itinerary)

Text:
{text_content}
""")
        human_msg = HumanMessage(content="")

        # call the model
        result = llm([system_msg, human_msg])
        output = result.content.strip()

        # csv line extract(first line only)
        csv_line = output.splitlines()[0]
        
        # Check if line  is not empty and contains comma ,  before appending
        if csv_line and "," in csv_line:  
            csv_rows.append(csv_line)
        else:
            print(f"Warning: Skipping URL {url} due to invalid CSV format from LLM output.")
            print(f"LLM Output: {output}") # Print the LLM output for debugging

        # save detailed itinerary breakdowns
        with open("detailed_itineraries.txt", "a", encoding="utf-8") as f:
            f.write(f"--- {url} ---\n{output}\n\n")

        # Be polite to the server
        time.sleep(2)

    except Exception as e:
        print(f"Error processing {url}: {e}")
        continue

# Save rows to CSV
if csv_rows:   
    csv_text = "\n".join(csv_rows)
    df = pd.read_csv(io.StringIO(csv_text))
    df.to_csv("all_tour_packages.csv", index=False)
    print("Saved to all_tour_packages.csv")
else:
    print("No valid data found to create CSV.")