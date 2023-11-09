package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.model.User;
import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.repo.UserRepo;

import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class UserController {

    @Autowired
    UserRepo repo;

    Logger log = LoggerFactory.getLogger(UserController.class);

    @GetMapping("/users/all")
    public List<User> getAllUsers() {
        List<User> users = repo.findAll();
        log.info("[/users/all] Returning all users ({} total)", users.size());
        return users;
    }

    @PostMapping("/users/add")
    public void addUser(@RequestBody User user) {
        log.info("[/users/add] Added new user: {}", user);
        repo.save(user);
    }
}
