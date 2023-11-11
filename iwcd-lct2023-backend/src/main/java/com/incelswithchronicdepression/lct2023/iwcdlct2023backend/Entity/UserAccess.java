package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "user_access")
public class UserAccess {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "access")
    @ColumnDefault("false")
    private boolean access;

    @Column(name = "stop_timestamp")
    private LocalDateTime stopTimestamp;

    public UserAccess(User user, boolean access, LocalDateTime stopTimestamp) {
        this.user = user;
        this.access = access;
        this.stopTimestamp = stopTimestamp;
    }

    public boolean getAccess() {
        return this.access;
    }

    public LocalDateTime getStopTimestamp() {
        return this.stopTimestamp;
    }

}
