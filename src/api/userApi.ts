import { http } from "@/plugins/axios";

interface TypeUser {
    name: string;
    age: number;
}

async function userInfo() {
    return http.request<TypeUser>({
        method: "get",
        url: "/userInfo",
    });
}

export default { userInfo };
