package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Entity;

import javax.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "user_types")
public class UserType {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    private UserType() {}

    public UserType(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }
}
