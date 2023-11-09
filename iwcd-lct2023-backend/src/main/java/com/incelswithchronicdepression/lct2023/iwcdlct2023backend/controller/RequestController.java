package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.repo.RequestRepo;
import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.repo.UserRepo;

import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class RequestController {

    @Autowired
    RequestRepo repo;

    Logger log = LoggerFactory.getLogger(RequestController.class);

    // Accept `page` query parameter
    // @GetMapping("/requests/list")
    // public 
}
