package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Controller;

import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.RequestBody.DictRequest;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
public class DialogController {

    @PostMapping("/api/dialog")
    public void dialog(@RequestBody List<DictRequest> dictRequestsList){
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://example.com/api/endpoint";
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
    }
}
