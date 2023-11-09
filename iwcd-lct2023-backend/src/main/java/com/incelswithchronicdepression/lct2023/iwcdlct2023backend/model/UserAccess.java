package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.model;

import java.time.LocalDateTime;

import org.hibernate.annotations.ColumnDefault;

import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.enumerators.SenderType;
import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.repo.UserRepo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
// import jakarta.persistence.EnumType;
// import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
// import jakarta.persistence.JoinColumn;
// import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "user_access")
public class UserAccess {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "access")
    @ColumnDefault("false")
    private boolean access;

    @Column(name = "stop_timestamp")
    private LocalDateTime stopTimestamp;

    private UserAccess() {}

    UserRepo userRepo;

    public UserAccess(Long userId, boolean access, LocalDateTime stopTimestamp) {
        this.user = userRepo.findById(userId).orElseThrow();
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
