package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PingPongController {
    @GetMapping("/ping")
    public String ping() {
        return "Pong!";
    }
}
