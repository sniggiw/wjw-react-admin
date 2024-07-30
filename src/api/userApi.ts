import { http } from "@/plugins/axios";

interface UserInfo {
    name: string;
    age: number;
}

async function userInfo() {
    return http.request<ResponseResult<UserInfo>>({
        method: "get",
        url: "/userInfo",
    });
}

export default { userInfo };
