from fastapi import APIRouter
from typing import List, Dict

from app.main_prediction import Predictor

router = APIRouter()

predictor = Predictor("./app/gazprom_model/")


@router.post("/model")
async def model_response(messages: List[Dict]):
    """
    messages structure:
    [
        {
            "text": "string",
            "sender": int (1 — chatbot, 2 — client, 3 — operator),
        }
    ]
    """
    summary_toxicity = 0
    summary_text = ""
    for message in messages:
        if message["sender"] == 2:
            toxicity = predictor.toxicity_model.text2toxicity(message["text"])
            number = predictor.toxicity_model.probability_to_number(toxicity)
            summary_toxicity += -1 * number
            summary_text += message["text"]
            summary_text += " "
        else:
            continue
    intent = predictor.intent_model.get_response(summary_text)
    toxicity = summary_toxicity / len(
        [message for message in messages if message["sender"] == 2]
    )

    offer_possibility = False
    if toxicity > 2:
        offer_possibility = True

    return {
        "intent": intent,
        "toxicity": toxicity,
        "offer_possibility": offer_possibility,
    }
