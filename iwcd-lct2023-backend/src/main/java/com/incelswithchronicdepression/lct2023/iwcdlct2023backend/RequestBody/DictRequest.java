package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.RequestBody;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Component
public class DictRequest {

    private int number;

    private String text;

    private boolean author;

}
