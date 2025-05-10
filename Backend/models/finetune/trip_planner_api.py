# File: trip_planner_api.py

from fastapi import FastAPI
from pydantic import BaseModel
import openai
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

openai.api_key = "OPENAI_API_KEY"

MODEL_NAME = "ft:gpt-4o-mini-2024-07-18:personal:ai-trip-planner-final:BTKhoUKU"

class TripRequest(BaseModel):
    location: str
    duration: int
    category: str | None = None

def generate_prompt(location: str, duration: int, category: str | None = None) -> str:
    prompt = f"Plan a {duration}-day itinerary for {location}"
    if category:
        prompt += f" focusing on {category} experiences."
    else:
        prompt += "."
    prompt += " Provide a day-by-day breakdown."
    return prompt

@app.post("/generate-itinerary")
def generate_itinerary(data: TripRequest):
    prompt = generate_prompt(data.location, data.duration, data.category)

    try:
        response = openai.chat.completions.create(
            model=MODEL_NAME,
            messages=[
                {"role": "system", "content": "You are a helpful travel planner AI. Provide detailed day-by-day itineraries."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7
        )

        return {"itinerary": response.choices[0].message.content.strip()}

    except Exception as e:
        return {"error": str(e)}

# Run : uvicorn trip_planner_api:app --reload
