package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Entity.Offer;
import org.springframework.stereotype.Repository;

@Repository
public interface OfferRepository extends JpaRepository<Offer, Long> {}
