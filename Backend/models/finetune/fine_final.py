# File: main.py
from fastapi import FastAPI, Request
from pydantic import BaseModel
import openai
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

 
class ItineraryRequest(BaseModel):
    location: str
    days: int

