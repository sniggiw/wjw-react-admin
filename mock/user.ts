import { MockMethod } from "vite-plugin-mock";
export default [
    {
        url: "/api/userInfo",
        method: "get",
        response: () => {
            return {
                code: 200,
                message: "请求成功",
                type: "success",
                result: {
                    name: "sniggiw",
                    age: 27,
                },
            };
        },
    },
] as MockMethod[];
