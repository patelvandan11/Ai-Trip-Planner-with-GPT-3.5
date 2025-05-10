# 
import openai
import os
from dotenv import load_dotenv
load_dotenv()
 
openai.api_key = "OPENAI_API_KEY"
# openai.api_key = os.getenv("OPENAI_API_KEY")  
 
model_id = "ft:gpt-4o-mini-2024-07-18:personal:ai-trip-planner-final:BTKhoUKU"

location = "Spiti Valley"
days = 6

prompt = f"Suggest a detailed day-by-day itinerary for a {days}-day trip to {location}."

response = openai.chat.completions.create(
    model=model_id,
    messages=[
        {"role": "system", "content": "You are a helpful travel planner AI. Provide detailed day-by-day itineraries."},
        {"role": "user", "content": prompt}
    ]
)

print("Generated Itinerary:\n")
print(response.choices[0].message.content)
v=response.choices[0].message.content

# def print_itinerary():
#     return v
