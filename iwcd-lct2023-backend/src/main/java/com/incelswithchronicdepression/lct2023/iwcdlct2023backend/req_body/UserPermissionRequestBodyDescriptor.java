package com.incelswithchronicdepression.lct2023.iwcdlct2023backend.req_body;

public class UserPermissionRequestBodyDescriptor {

    private int permission;
    private String role;

    public UserPermissionRequestBodyDescriptor(int permission, String role) {
        this.permission = permission;
        this.role = role;
    }

    public int getPermission() {
        return permission;
    }

    public String getRole() {
        return role;
    }

    // override string
    @Override
    public String toString() {
        return "UserPermissionRequestBodyDescriptor(permission=" + permission + ", role=" + role + ")";
    }
}
