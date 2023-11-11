"""
    Установки:
        1)  pip install transformers sentencepiece --quiet
"""
import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification


class ToxicityClassifier:
    def __init__(self, model_checkpoint='cointegrated/rubert-tiny-toxicity'):
        self.tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)
        self.model = AutoModelForSequenceClassification.from_pretrained(model_checkpoint)
        if torch.cuda.is_available():
            self.model.cuda()

    def text2toxicity(self, text, aggregate=True):
        """ Calculate toxicity of a text (if aggregate=True) or a vector of toxicity aspects (if aggregate=False)"""
        with torch.no_grad():
            inputs = self.tokenizer(text, return_tensors='pt', truncation=True, padding=True).to(self.model.device)
            proba = torch.sigmoid(self.model(**inputs).logits).cpu().numpy()
        if isinstance(text, str):
            proba = proba[0]
        if aggregate:
            return 1 - proba.T[0] * (1 - proba.T[-1])
        return proba

    @staticmethod
    def probability_to_number(probability):
        return round(probability * 10 - 5)


classifier = ToxicityClassifier()
toxicity = classifier.text2toxicity('привет друг!', aggregate=True)
number = classifier.probability_to_number(toxicity)
print(number)
