package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.model.UserAccess;
import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.repo.UserAccessRepo;
import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.repo.UserRepo;
import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.req_body.UserPermissionRequestBodyDescriptor;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class UserAccessController {

    @Autowired
    UserAccessRepo repo;

    Logger log = LoggerFactory.getLogger(UserController.class);

    // /users/permission?user_id={}
    // from request: user_id (int)
    // from body: permission (int) (0-1) where 0 is restrict and 1 is change
    // from body: role (string) (none when permission is 0)
    // DO NOT use @RequestBody UserAccess userAccess
    @PatchMapping("/users/permission")
    public void changeUserPermission(@RequestParam Long user_id,
        @RequestBody UserPermissionRequestBodyDescriptor body) {
        log.info("[/users/permission] Added or changed user permission: {}", body);
        // If user_id already exists in table, update it
        // Else, create a new entry
        UserAccess userAccess = repo.findByUserId(user_id).get(0);
        if (userAccess == null) {
            userAccess = new UserAccess(user_id, body.getPermission(), body.getRole());
            userAccess.setUserId(user_id);
        }
}
