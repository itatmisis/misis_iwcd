package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Service.UserAction;

import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Entity.Request;
import com.incelswithchronicdepression.lct2023.iwcdlct2023backend.Repository.UserActionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserActionServiceImpl implements UserActionService {

    private final UserActionsRepository userActionsRepo;

    @Autowired
    public UserActionServiceImpl(UserActionsRepository userActionsRepo) {
        this.userActionsRepo = userActionsRepo;
    }

    @Override
    public long findUserIdByRequest(Request request) {
        return userActionsRepo.findUserByRequest(request);
    }
}
