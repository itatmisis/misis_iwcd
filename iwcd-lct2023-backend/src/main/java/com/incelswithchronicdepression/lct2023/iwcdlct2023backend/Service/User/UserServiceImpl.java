package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Service.User;

import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.model.User;
import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    private final UserRepo userRepo;
    @Autowired
    public UserServiceImpl(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public List<User> findAll() {
        return userRepo.findAll();
    }

    @Override
    public void save(User user) {
        userRepo.save(user);
    }
}
