package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Entity.Request;
import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.RequestBody.DictRequest;
import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.ResponseBody.DialogResponse;
import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Service.Request.RequestServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@RestController
public class DialogController {

    private final RequestServiceImpl requestService;

    @Autowired
    public DialogController(RequestServiceImpl requestService) {
        this.requestService = requestService;
    }


    @PostMapping("/api/dialog")
    public void dialog(@RequestBody List<DictRequest> dictRequestsList) throws JsonProcessingException {
        List<String> stopThemes = new ArrayList<>(List.of("complaint", "close_account"));
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://fastapi-backend-iwcd.seizure.icu/";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        String requestBody = "{" +
                " \"number\":" + dictRequestsList.get(0) +
                "\"text\":" + dictRequestsList.get(1) +
                "\"author\":" + dictRequestsList.get(2) +
                "}";
        HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
        String responseBody = response.getBody();
        DialogResponse[] dialogResponses = new ObjectMapper().readValue(responseBody, DialogResponse[].class);
        Request request = new Request();
        request.setEmotionalGradation(dialogResponses[0].getToxicity());
        request.setAdditionalOfferPossibility(dialogResponses[0].isOffer_possibility());
        if (!stopThemes.contains(dialogResponses[0].toString())) {
            request.setText(dialogResponses[0].toString());
        } else {
            request.setStopThemes(dialogResponses[0].toString());
        }
    }
}
