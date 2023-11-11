package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Entity.UserAccess;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAccessRepository extends JpaRepository<UserAccess, Long> {
    List<UserAccess> findByUserId(Long userId);
}
