package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Entity;

import java.time.LocalDateTime;

import javax.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "requests")
public class Request {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "start")
    private LocalDateTime start;

    @Column(name = "stop")
    private LocalDateTime stop;

    @Column(name = "is_success", nullable = true)
    private boolean isSuccess;

    @Column(name = "theme")
    private String text;

    @Column(name = "emotional_gradation")
    private int emotionalGradation;

    @Column(name = "additional_offer_possibility")
    private boolean additionalOfferPossibility;

    @Column(name = "markup_status")
    private int markupStatus;

    @Column(name = "stop_themes")
    private String stopThemes;

    @Column(name = "comment")
    private String comment;

    private Request() {}

    public Request(LocalDateTime start, LocalDateTime stop, boolean isSuccess, String text) {
        this.start = start;
        this.stop = stop;
        this.isSuccess = isSuccess;
        this.text = text;
    }

    public Request(LocalDateTime start, LocalDateTime stop, boolean isSuccess, String text, int emotionalGradation, boolean additionalOfferPossibility, int markupStatus, String stopThemes, String comment) {
        this.start = start;
        this.stop = stop;
        this.isSuccess = isSuccess;
        this.text = text;
        this.emotionalGradation = emotionalGradation;
        this.additionalOfferPossibility = additionalOfferPossibility;
        this.markupStatus = markupStatus;
        this.stopThemes = stopThemes;
        this.comment = comment;
    }

    public Request(LocalDateTime start, LocalDateTime stop, String text) {
        this.start = start;
        this.stop = stop;
        this.text = text;
    }

    public LocalDateTime getStart() {
        return this.start;
    }

    public LocalDateTime getStop() {
        return this.stop;
    }

    public boolean getIsSuccess() {
        return this.isSuccess;  // nullable!
    }

    public String getText() {
        return this.text;
    }
}
