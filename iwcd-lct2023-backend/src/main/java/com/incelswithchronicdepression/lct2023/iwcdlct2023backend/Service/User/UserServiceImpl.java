package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Service.User;

import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Entity.User;
import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepo;
    @Autowired
    public UserServiceImpl(UserRepository userRepo) {
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
