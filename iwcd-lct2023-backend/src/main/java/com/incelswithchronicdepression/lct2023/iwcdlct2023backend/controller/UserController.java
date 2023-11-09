package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.model.User;
import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.repo.UserRepo;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
public class UserController {

    @Autowired
    UserRepo repo;

    @GetMapping("/users/all")
    public void getAllUsers() {
        repo.findAll();
    }

    @PostMapping("/users/add")
    public void addUser(@RequestBody User user) {
        System.out.println(user);
        repo.save(user);
    }
}
