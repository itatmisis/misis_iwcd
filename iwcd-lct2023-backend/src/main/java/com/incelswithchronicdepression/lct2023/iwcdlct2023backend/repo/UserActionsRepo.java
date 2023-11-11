package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.repo;

import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.model.Request;
import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.model.UserAction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserActionsRepo extends JpaRepository<UserAction, Long> {

    @Query(value = "SELECT u.user_id FROM user_actions u WHERE u.request_id = :request", nativeQuery = true)
    long findUserByRequest(@Param(value = "request") Request request);
}
