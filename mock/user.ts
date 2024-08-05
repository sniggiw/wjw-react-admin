import Mock from "mockjs";
import { MockMethod } from "vite-plugin-mock";

const { Random } = Mock;

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
    {
        url: "/api/login",
        method: "get",
        response: () => {
            return {
                code: 200,
                message: "登录成功",
                type: "success",
                result: {
                    token: Random.string(10),
                },
            };
        },
    },
] as MockMethod[];
