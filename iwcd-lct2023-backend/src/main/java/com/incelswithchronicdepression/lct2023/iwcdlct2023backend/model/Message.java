package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.model;

import java.time.LocalDateTime;

import org.hibernate.annotations.ColumnDefault;

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
    private Long id;

    @ManyToOne
    @JoinColumn(name = "request_id")
    // @Column(name = "request_id")
    private Request user;

    @Column(name = "number")
    private Integer number;

    @Column(name = "text")
    private String text;

    @Column(name = "time")
    @ColumnDefault("CURRENT_TIMESTAMP")
    private LocalDateTime time;

    @Column(name = "sender")
    @Enumerated(EnumType.ORDINAL)
    private SenderType senderType;

    @Column(name = "last_edited", nullable = true)
    private LocalDateTime lastEdited;

    @Column(name = "intent_class", nullable = true)
    private String intentClass;

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

    public String getIntentClass() {
        return this.intentClass;
    }
}
