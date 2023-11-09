package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.model.UserAccess;

public interface UserAccessRepo extends JpaRepository<UserAccess, Long> {
    List<UserAccess> findByUserId(Long userId);
}
