package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Service.Request;

import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.repo.RequestRepo;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequestServiceImpl implements RequestService{

    private final RequestRepo requestRepo;

    @Autowired
    public RequestServiceImpl(RequestRepo requestRepo) {
        this.requestRepo = requestRepo;
    }

    @Override
    public JSONObject findFetchData() {
        List<Integer> successMarkupStatusList = requestRepo.findAllSuccessMarkupStatus();
        List<Integer> failuresMarkupStatusList = requestRepo.findAllFailuresMarkupStatus();
        List<Integer> unlabeledMarkupStatusList = requestRepo.findAllUnlabeledMarkupStatus();

        int success = (int) (Double.valueOf(successMarkupStatusList.size())/Double.valueOf(failuresMarkupStatusList.size()+unlabeledMarkupStatusList.size())*100);
        int failures = (int) (Double.valueOf(failuresMarkupStatusList.size())/Double.valueOf(successMarkupStatusList.size()+unlabeledMarkupStatusList.size())*100);
        int unlabeled = (int) (Double.valueOf(unlabeledMarkupStatusList.size())/Double.valueOf(failuresMarkupStatusList.size()+successMarkupStatusList.size())*100);

        JSONObject jsonObject = new JSONObject();
        jsonObject.append("success", success);
        jsonObject.append("failures", failures);
        jsonObject.append("unlabeled", unlabeled);

        return jsonObject;
    }
}
