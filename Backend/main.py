from fastapi import FastAPI
from pydantic import BaseModel
import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env file

api_key = os.getenv("GEMINI_API_KEY")
if api_key is None:
    raise ValueError("API key not found. Please set the GEMINI_API_KEY environment variable.")
genai.configure(api_key=api_key)
app = FastAPI()

# Request models
class MentalRequest(BaseModel):
    message: str

class SymptomRequest(BaseModel):
    symptoms: str

class MedRequest(BaseModel):
    meds: str

# -----------------------------
# Mental Health Endpoint
# -----------------------------
@app.post("/mental_health")
def mental_health(req: MentalRequest):
    # Gemini prompt
    prompt = f"User is feeling: '{req.message}'. Analyze stress, give a stress score 0-10 and coping tips."
    response = genai.generate_text(model="gemini-1.5", prompt=prompt)
    ai_text = response.text

    # Optional: fallback stress score & tips
    stress_score = 6
    tips = "Follow suggested coping tips from AI."

    return {"analysis": ai_text, "stress_score": stress_score, "tips": tips}

# -----------------------------
# Symptom Checker Endpoint
# -----------------------------
@app.post("/symptom_checker")
def symptom_checker(req: SymptomRequest):
    prompt = f"User has symptoms: '{req.symptoms}'. List possible conditions and explain in a simple storyboard."
    response = genai.generate_text(model="gemini-1.5", prompt=prompt)
    return {"result": response.text}

# -----------------------------
# Medication Checker Endpoint
# -----------------------------
@app.post("/medication_checker")
def medication_checker(req: MedRequest):
    prompt = f"Check for interactions or side effects between: '{req.meds}'. Explain simply."
    response = genai.generate_text(model="gemini-1.5", prompt=prompt)
    return {"result": response.text}

