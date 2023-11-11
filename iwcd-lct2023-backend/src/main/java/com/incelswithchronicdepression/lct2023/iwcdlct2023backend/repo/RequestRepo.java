package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.model.Request;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RequestRepo extends JpaRepository<Request, Long> {

    @Query(value = "SELECT r.markup_status FROM requests r", nativeQuery = true)
    List<Integer> findAllMarkupStatus();

    @Query(value = "SELECT r.markup_status FROM requests r WHERE r.markup_status = 1", nativeQuery = true)
    List<Integer> findAllSuccessMarkupStatus();

    @Query(value = "SELECT r.markup_status FROM requests r WHERE r.markup_status = 3", nativeQuery = true)
    List<Integer> findAllFailuresMarkupStatus();

    @Query(value = "SELECT r.markup_status FROM requests r WHERE r.markup_status = 0", nativeQuery = true)
    List<Integer> findAllUnlabeledMarkupStatus();
}
