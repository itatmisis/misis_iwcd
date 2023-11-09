package com.incelswithchronicdepression.lct2023.iwcdlct2023backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class IwcdLct2023BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(IwcdLct2023BackendApplication.class, args);
	}

}
