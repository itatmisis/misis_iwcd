package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.model;

import java.time.LocalDateTime;

import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.enumerators.SenderType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "messages")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "request_id")
    // @Column(name = "request_id")
    private Request user;

    @Column(name = "number")
    private Integer number;

    @Column(name = "text")
    private String text;

    @Column(name = "time")
    private LocalDateTime time;

    @Column(name = "sender")
    @Enumerated(EnumType.ORDINAL)
    private SenderType senderType;

    @Column(name = "last_edited")
    private LocalDateTime lastEdited;

    private Message() {}

    public Message(int number, String text, LocalDateTime time, SenderType senderType, LocalDateTime lastEdited) {
        this.number = number;
        this.text = text;
        this.time = time;
        this.senderType = senderType;
        this.lastEdited = lastEdited;
    }

    public int getNumber() {
        return this.number;
    }

    public String getText() {
        return this.text;
    }

    public LocalDateTime getTime() {
        return this.time;
    }

    public SenderType getSenderType() {
        return this.senderType;
    }

    public LocalDateTime getLastEdited() {
        return this.lastEdited;
    }
}
