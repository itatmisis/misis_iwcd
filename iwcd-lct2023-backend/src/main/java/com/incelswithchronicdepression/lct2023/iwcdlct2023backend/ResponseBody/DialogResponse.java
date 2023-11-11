package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.ResponseBody;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Component
public class DialogResponse {

    private String intent;

    private int toxicity;

    private boolean offer_possibility;
}
