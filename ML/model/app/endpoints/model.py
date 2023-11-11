from fastapi import APIRouter, Depends, HTTPException, status

from app.intent_classifier import Adapter
from app.toxicity_analyzer import ToxicityClassifier

router = APIRouter()

toxicity_model = ToxicityClassifier()
intent_model = Adapter("./app/gazprom_model/")


@router.post("/model")
async def model_response(message: dict):
    toxicity = toxicity_model.text2toxicity(message["text"])
    number = toxicity_model.probability_to_number(toxicity)
    return {"toxicity": number}
