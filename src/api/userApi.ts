import { http } from "@/plugins/axios";

export interface UserInfo {
    name: string;
    age: number;
}

export interface Login {
    token: string;
}

function userInfo() {
    return http.request<UserInfo>({
        url: "/userInfo",
        method: "get",
    });
}

function login() {
    return http.request<Login>({
        url: "/login",
        method: "get",
    });
}

export default { userInfo, login };
