let loginInputStyle =
    "py-1 px-2 mb-5 w-full rounded-sm border border-gray-200 outline-none placeholder:text-xs focus:ring-1 ring-offset-2 ring-indigo-700 duration-200 focus:border-white";

export default function Login() {
    return (
        <div className="bg-slate-300 h-screen flex justify-center items-center">
            <div className="w-[720px] bg-white grid grid-cols-2 rounded-md shadow-md overflow-hidden">
                <div className="p-6">
                    <h2 className="text-center text-lg text-gray-700 mt-3">用户登录</h2>
                    <div className="mt-5">
                        <input type="text" placeholder="请输入手机或邮箱" className={loginInputStyle} />
                        <input type="text" placeholder="请输入密码或验证码" className={loginInputStyle} />
                    </div>
                    <button className="rounded-md bg-indigo-700 text-white py-2 w-full hover:bg-indigo-500 duration-200">
                        登录
                    </button>
                    <div className="flex gap-2 justify-center mt-3">
                        <a href="" className="text-xs text-gray-400 hover:text-gray-600 duration-200">如来佛祖</a>
                        <a href="" className="text-xs text-gray-400 hover:text-gray-600 duration-200">齐天大圣</a>
                        <a href="" className="text-xs text-gray-400 hover:text-gray-600 duration-200">观音婆萨</a>
                        <a href="" className="text-xs text-gray-400 hover:text-gray-600 duration-200">玉皇大帝</a>
                    </div>
                </div>
                <div>
                    <img className="w-full h-80 object-cover" src="/images/login.jpg" alt="login-img" />
                </div>
            </div>
        </div>
    );
}
