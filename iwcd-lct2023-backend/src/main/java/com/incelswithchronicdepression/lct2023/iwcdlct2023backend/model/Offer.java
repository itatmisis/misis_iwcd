package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "offers")
public class Offer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "offer_text")
    private String offerText;

    private Offer() {}

    public Offer(String offerText) {
        this.offerText = offerText;
    }

    public String getOfferText() {
        return this.offerText;
    }
}
