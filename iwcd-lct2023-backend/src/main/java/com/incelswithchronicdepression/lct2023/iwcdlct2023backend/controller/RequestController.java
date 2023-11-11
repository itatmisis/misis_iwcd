package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.controller;

import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Service.Request.RequestServiceImpl;
import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.model.Request;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class RequestController {

    Logger log = LoggerFactory.getLogger(RequestController.class);

    private final RequestServiceImpl requestService;

    @Autowired
    public RequestController(RequestServiceImpl requestService) {
        this.requestService = requestService;
    }

    @GetMapping("/api/fetch_data")
    public ResponseEntity getFetchData(){
        JSONObject jsonObject = requestService.findFetchData();
        return new ResponseEntity(jsonObject.toMap(), HttpStatus.OK);
    }

    @GetMapping("/api/requests/all")
    public ResponseEntity getAllRequests(){
        List<Request> list = requestService.findAllRequests();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @GetMapping("/api/requests")
    public ResponseEntity getGetRequestById(@RequestParam Long request_id){
        Optional<Request> request = requestService.findGetRequestById(request_id);
        return request.isPresent() ? new ResponseEntity(request.get(), HttpStatus.OK) : new ResponseEntity(null, HttpStatus.NOT_FOUND);
    }

    @PatchMapping("/api/requests")
    public ResponseEntity getPatchRequestById(@RequestParam Long request_id){
        JSONObject jsonObject = requestService.findPatchRequestById(request_id);
        return !jsonObject.equals(null) ? new ResponseEntity(jsonObject.toMap(), HttpStatus.OK) : new ResponseEntity(null, HttpStatus.NOT_FOUND);
    }

}
