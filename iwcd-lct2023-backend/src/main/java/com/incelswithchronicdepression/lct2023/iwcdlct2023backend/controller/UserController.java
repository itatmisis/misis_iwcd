package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.controller;

import java.util.List;

import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Service.User.UserServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.model.User;

import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class UserController {

    Logger log = LoggerFactory.getLogger(UserController.class);
    private final UserServiceImpl userService;

    @Autowired
    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @GetMapping("/users/all")
    public List<User> getAllUsers() {
        List<User> users = userService.findAll();
        log.info("[/users/all] Returning all users ({} total)", users.size());
        return users;
    }

    @PostMapping("/users/add")
    public void addUser(@RequestBody User user) {
        log.info("[/users/add] Added new user: {}", user);
        userService.save(user);
    }
}
