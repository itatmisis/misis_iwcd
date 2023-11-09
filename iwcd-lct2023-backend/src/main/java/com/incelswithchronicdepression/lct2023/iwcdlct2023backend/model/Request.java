package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.model;

import java.time.LocalDateTime;

// import org.hibernate.annotations.ColumnDefault;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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

    @Column(name = "is_success", nullable = true)  // @ColumnDefault not needed (?)
    private boolean isSuccess;

    @Column(name = "theme")
    private String text;

    private Request() {}

    public Request(LocalDateTime start, LocalDateTime stop, boolean isSuccess, String text) {
        this.start = start;
        this.stop = stop;
        this.isSuccess = isSuccess;
        this.text = text;
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
