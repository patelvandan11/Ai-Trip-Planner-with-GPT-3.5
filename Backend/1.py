# from google import genai

# client = genai.Client(api_key="api ")

# response = client.models.generate_content(
#     model="gemini-2.0-flash",
#     contents="Explain how AI works in a few words",
# )

# print(response.text)

from dotenv import load_dotenv
load_dotenv()
import requests
from bs4 import BeautifulSoup
from langchain.chat_models import ChatOpenAI
from langchain.schema import SystemMessage, HumanMessage
import pandas as pd
import os

# Set your OpenAI API key
os.environ["OPENAI_API_KEY"] = "OPENAI_API_KEY"  # Replace with your actual key

# URL to scrape
url = "https://toursinindia.in/tours-india/delhi-agra-tour-package.php"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

# Extract raw text content
text_content = soup.get_text(separator="\n", strip=True)

# Define the system prompt
system_msg = SystemMessage(content="""
You are a travel assistant AI. Extract and summarize the following details from the text:
- name (title of the package)
- category (Adventure, Nature, Heritage, Spiritual, etc.)
- highlights (top 3 attractions or experiences)
- duration (approximate in days)
- price (approximate in INR)
Return it as CSV line: name,category,highlights,duration,price
""")

# Ask model to extract info
human_msg = HumanMessage(content=text_content)

# Initialize LLM
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)

# Call the model
response = llm([system_msg, human_msg])

# Parse response
print("Extracted CSV Line:\n", response.content)

# Save as CSV
columns = ["name", "category", "highlights", "duration", "price"]
values = response.content.strip().split(",")

df = pd.DataFrame([values], columns=columns)
df.to_csv("langchain_tour_output.csv", index=False)
print("Saved to langchain_tour_output.csv")
