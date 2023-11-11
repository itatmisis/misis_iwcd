package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.model.Offer;
import org.springframework.stereotype.Repository;

@Repository
public interface OfferRepo extends JpaRepository<Offer, Long> {}
