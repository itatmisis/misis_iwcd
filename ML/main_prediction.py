from intent_classifier import Adapter
from toxicity_analyzer import ToxicityClassifier

ex_input = [{'text': 'Мне нужно карту оформить', 'label': None}]


class Predictor:
    def __init__(self, path_to_intent_classifier: str):
        self.intent_model = Adapter(path_to_intent_classifier)
        self.toxicity_model = ToxicityClassifier()

    def predict_last_label(self, input_list: list) -> list:
        last_request = input_list[-1]
        predicted_label = self.intent_model.get_response(last_request['text'])
        input_list[-1]['label'] = predicted_label
        return input_list
