import { useEffect } from "react";
import userApi from "@/api/userApi";

export default function Home() {
    const getUserInfo = async () => {
        const response = await userApi.userInfo();
        console.log(response);
    };

    useEffect(() => {
        getUserInfo();
    }, []);

    return <div className="bg-red-500">主页 - home...</div>;
}
