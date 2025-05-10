from openai import OpenAI
import os

os.environ["OPENAI_API_KEY"] = "your-api-key"  # Replace with your key

def generate_user_response(prompt: str):
    client = OpenAI()
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",  # or another model
        messages=[{"role": "user", "content": prompt}]
    )
    return {
        "answer": response.choices[0].message.content.strip(),
        "status": "success"
    }
