import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi";
import { PiDotsNineBold } from "react-icons/pi";

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
            <div
              style={{
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
              }}
            >
              <h2 className=" ">
                اعلام نتایج آزمون ورودی کارآموزی وکالت سال 1404(کانون وکلا
                دادگستری)
              </h2>
            </div>
          </div>
          <div className="master-down bg-[url('/img/hddn.jpg')] h-[22px] pt-[22px] bg-cover ]"></div>
        </div>

        <div className="p-2 bg-white">
          <div className="box-center text-right rounded text-md px-4 py-2 font-['tahoma'] text-[12px] font-bold bg-[#d75c99]  text-white">
            مشاهده و چاپ نتیجه
          </div>
        </div>

        <div dir="rtl" className="bg-white px-8 text-sm ">
          
            <div className="flex rounded-md overflow-clip">
              <div className="bg-yellow-50 py-2 px-2">
                <FiAlertTriangle className="text-4xl text-red-600" />
              </div>
              <ul className="bg-gray-200 block w-full  py-4 px-4 space-y-2 text-xs">
                <li className="flex gap-1 items-center">
                  <PiDotsNineBold />
                  <span>
                    در هنگام وارد کردن اطلاعات، زبان کيبورد سيستم خود را
                    تغييرندهيد.
                  </span>
                </li>
                <li className="flex gap-1 items-center">
                  <PiDotsNineBold />
                  <span>كیبورد سيستم بر روي En باشد</span>
                </li>
                <li className="flex gap-1 items-center">
                  <PiDotsNineBold />
                  <span>کليد Caps lock بايد خاموش باشد.</span>
                </li>
                <li className="flex gap-1 items-center">
                  <PiDotsNineBold />
                  <span>
                    نتایج آزمون کارآموزی وکالت براساس قانون تسهیل صدور مجوز های
                    کسب و کار بدون ظرفیت و با لحاظ تراز نمرات اعلام شده است.
                  </span>
                </li>
                <li className="flex gap-1 items-center">
                  <PiDotsNineBold />
                  <span>
                    در صورت هرگونه سوال در رابطه با نمره آزمون و یا سهمیه شرکت
                    در آزمون، می توانید موضوع خود را فقط در قسمت سیستم پاسخگویی
                    این سازمان حداکثر تا تاریخ 1404/09/29 مطرح نمایند.
                  </span>
                </li>
                <li className="flex gap-1 items-center">
                  <PiDotsNineBold />
                  <span>
                    داوطلبان دارای حد نصاب ، به اطلاعیه های کانون متبوع خود و
                    مهلت های اعلام شد جهت ثبت نام در سایت اختصاصی آن کانون توجه
                    فرمایند.
                  </span>
                </li>
              </ul>
            </div>
          
        </div>

        <div className="flex">
          <form
            onSubmit={handleLogin}
            className="w-full  bg-white p-6 space-y-6 shadow  min-h-screen"
          >
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
              <div className="bg-gray-200  rounded font-mono text-lg tracking-widest">
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="text-2xl text-gray-800 font-semibold px-6 py-3"
                >
                  {captcha}
                </button>
              </div>
            </div>

            <input
              className="w-full border p-2 rounded"
              placeholder="Enter the code above"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
            />

            <button className="w-full bg-gradient-to-b border-pu-500 border from-pink-200 to-pink-500 text-black py-2 rounded">
              مشاهده نتیجه
            </button>
          </form>
          <form
            onSubmit={handleLogin}
            className="w-full  bg-white p-6 space-y-6 shadow  min-h-screen"
          >
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
              <div className="bg-gray-200  rounded font-mono text-lg tracking-widest">
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="text-2xl text-gray-800 font-semibold px-6 py-3"
                >
                  {captcha}
                </button>
              </div>
            </div>

            <input
              className="w-full border p-2 rounded"
              placeholder="Enter the code above"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
            />

            <button className="w-full bg-gradient-to-b border-pu-500 border from-pink-200 to-pink-500 text-black py-2 rounded">
              مشاهده نتیجه
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
