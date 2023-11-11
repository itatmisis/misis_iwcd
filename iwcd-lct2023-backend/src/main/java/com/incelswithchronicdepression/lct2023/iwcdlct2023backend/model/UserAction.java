package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.model;

import java.time.LocalDateTime;

import javax.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "user_actions")
public class UserAction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "request_id")
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
