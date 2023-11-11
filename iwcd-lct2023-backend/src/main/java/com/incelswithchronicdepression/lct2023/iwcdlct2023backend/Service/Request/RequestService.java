package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Service.Request;

import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.model.Request;
import org.json.JSONObject;

import java.util.List;
import java.util.Optional;

public interface RequestService {

    JSONObject findFetchData();

    List<Request> findAllRequests();

    Optional<Request> findRequestById(Long id);
}
