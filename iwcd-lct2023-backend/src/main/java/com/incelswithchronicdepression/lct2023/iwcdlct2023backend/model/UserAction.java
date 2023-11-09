package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "user_actions")
public class UserAction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    // @Column(name = "user")
    private User user;

    @ManyToOne
    @JoinColumn(name = "request_id")
    // @Column(name = "request")
    private Request request;

    @Column(name = "action_date")
    private LocalDateTime actionDate;  // Read more on LocalTimeDate.
    // P. S. LocalTimeDate class doesn't have TZ info.

    private UserAction() {}

    public UserAction(Request request, LocalDateTime actionDate) {
        this.request = request;
        this.actionDate = actionDate;
    }

    public Request getRequest() {
        return (this.request);
    }

    public LocalDateTime getActionDate() {
        return (this.actionDate);
    }
}
