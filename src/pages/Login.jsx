import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  const navigate = useNavigate();

  // تولید عدد تصادفی
  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const random = Math.floor(100 + Math.random() * 900); // عدد ۳ رقمی
    setCaptcha(random.toString());
    setCaptchaInput("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (captcha !== captchaInput) {
      alert("کد امنیتی اشتباه است");
      generateCaptcha();
      return;
    }

    // لاگین فیک
    if (username === "admin" && password === "1234") {
      localStorage.setItem("isLoggedIn", true);
      navigate(`/dashboard/${username}`);
    } else {
      alert("نام کاربری یا رمز عبور اشتباه است");
    }
  };

  return (
    <div className=" flex   justify-center bg-[#d75c99]">
      <div className="w-[955px] ">

        <div>
          <div className="master-up bg-[url('/img/hdup.jpg')] h-[45px] bg-cover ]"></div>
          <div className="master-center bg-[url('/img/hdmd.jpg')] h-[58px] bg-cover ]">
            <div  style={{
                height: "27px",
                width: "740px",
                // paddingRight: "215px",
                paddingTop: "31px",
                textAlign: "right",
                direction: "rtl",
                color: "#FFFFFF",
                fontFamily: "'b yekan', sans-serif",
                fontSize: "1.1em",
                fontWeight: "bold",
              }}>
              <h2 className=" ">اعلام نتایج آزمون ورودی کارآموزی وکالت سال 1404(کانون وکلا دادگستری)</h2>
            </div>
          </div>
          <div className="master-down bg-[url('/img/hddn.jpg')] h-[22px] pt-[22px] bg-cover ]"></div>
        </div>

        <form
        onSubmit={handleLogin}
        className="w-full  bg-white p-6 space-y-6 shadow  min-h-screen"
      >


        <div className="box-center text-right rounded text-md px-4 py-2 font-['tahoma'] text-[12px] font-bold bg-[#d75c99]  text-white">مشاهده و چاپ نتیجه</div>
 
        <input
          className="w-full border p-2 rounded"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-2 rounded"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* CAPTCHA */}
        <div className="flex items-center justify-between">
          <div className="bg-gray-200 px-4 py-2 rounded font-mono text-lg tracking-widest">
            {captcha}
          </div>

          <button
            type="button"
            onClick={generateCaptcha}
            className="text-sm text-blue-600"
          >
            ↻
          </button>
        </div>

        <input
          className="w-full border p-2 rounded"
          placeholder="Enter the code above"
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
        </form>
      </div>
    </div>
  );
}
