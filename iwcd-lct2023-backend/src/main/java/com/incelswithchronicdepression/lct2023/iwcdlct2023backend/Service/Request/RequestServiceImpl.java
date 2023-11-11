package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Service.Request;

import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Service.UserAction.UserActionServiceImpl;
import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.model.Request;
import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.repo.RequestRepo;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RequestServiceImpl implements RequestService{

    private final RequestRepo requestRepo;
    private final UserActionServiceImpl userActionService;

    @Autowired
    public RequestServiceImpl(RequestRepo requestRepo, UserActionServiceImpl userActionService) {
        this.requestRepo = requestRepo;
        this.userActionService = userActionService;
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

    @Override
    public List<Request> findAllRequests() {
        return requestRepo.findAll();
    }

    @Override
    public Optional<Request> findGetRequestById(Long id) {
        return requestRepo.findById(id);
    }

    @Override
    public JSONObject findPatchRequestById(Long id) {
        Optional<Request> request = findGetRequestById(id);
        if(request.isPresent()){
            JSONObject jsonObject = new JSONObject();
            Request request1 = request.get();
            long userId = userActionService.findUserIdByRequest(request1);
            jsonObject.append("user_id", userId);
            jsonObject.append("comment", request1.getComment());
            jsonObject.append("markup_status", request1.getMarkupStatus());
            return jsonObject;
        }else{
            return null;
        }
    }
}
