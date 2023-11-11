package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Service.User;

import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.model.User;

import java.util.List;

public interface UserService {
    List<User> findAll();

    void save(User user);
}
