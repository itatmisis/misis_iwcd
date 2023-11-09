package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.model.User;

public interface UserRepo extends JpaRepository<User, Long> {}
