package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Service.UserAction;

import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.model.Request;
import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.repo.UserActionsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserActionServiceImpl implements UserActionService {

    private final UserActionsRepo userActionsRepo;

    @Autowired
    public UserActionServiceImpl(UserActionsRepo userActionsRepo) {
        this.userActionsRepo = userActionsRepo;
    }

    @Override
    public long findUserIdByRequest(Request request) {
        return userActionsRepo.findUserByRequest(request);
    }
}
