import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi";
import { PiDotsNineBold } from "react-icons/pi";
import TopBar from "../components/module/TopBar";
import SeeAndPrint from "../components/module/SeeAndPrint";

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
    if (username === "4069979" && password === "0021262292") {
      localStorage.setItem("isLoggedIn", true);
      navigate(`/dashboard/${username}`);
    } else {
      alert("مشخصات کاربر اشتباه است");
      generateCaptcha();
    }
  };

  return (
    <div className=" flex   justify-center ">
      <div className="  ">
        <TopBar />

        <SeeAndPrint />

        <div dir="rtl" className="bg-white px-8 text-sm ">
          <div className="flex rounded-md overflow-clip">
            <div className="bg-yellow-50 py-2 px-2">
              <FiAlertTriangle className=" warning-icon" />
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
                  در صورت هرگونه سوال در رابطه با نمره آزمون و یا سهمیه شرکت در
                  آزمون، می توانید موضوع خود را فقط در قسمت سیستم پاسخگویی این
                  سازمان حداکثر تا تاریخ 1404/09/29 مطرح نمایند.
                </span>
              </li>
              <li className="flex gap-1 items-center">
                <PiDotsNineBold />
                <span>
                  داوطلبان دارای حد نصاب ، به اطلاعیه های کانون متبوع خود و مهلت
                  های اعلام شد جهت ثبت نام در سایت اختصاصی آن کانون توجه
                  فرمایند.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white">
          <div className="flex w-full  justify-center px-16 gap-16">
                <form
                  onSubmit={handleLogin}
                  className=" w-full bg-white  pt-8  "
                >
                  <div className=" space-y-6 border p-4 ">
                    <h2 className="text-center bg-gray-200 p-4">
                      جستجوی نتیجه با اطلاعات پرونده
                    </h2>
                    <div className="flex flex-row-reverse gap-2 items-center justify-end">
                      <label className="text-nowrap"> شماره پرونده</label>
                      <input
                        className="w-[190px] border p-1 rounded"
                        placeholder=" "
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-row-reverse gap-2 items-center justify-end">
                      <label className="text-nowrap"> شماره شناسنامه</label>
                      <input
                        type="password"
                        className="w-[190px] border p-1 rounded"
                        placeholder=""
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    {/* CAPTCHA */}


                    <input
                      className="w-full border p-2 rounded"
                      dir="rtl"
                      placeholder="عبارت امنیتی"
                      // value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                    />

                    <button className="w-full mt-14 bg-gradient-to-b border-pu-500 border from-pink-200 to-pink-500 text-black py-2 rounded">
                      مشاهده نتیجه
                    </button>
                  </div>
                </form>
                <form
                  onSubmit={handleLogin}
                  className=" w-full   bg-white  pt-8  "
                >
                  <div className=" space-y-6 border p-4 ">
                    <h2 className="text-center bg-gray-200 p-4">
                      جستجوی نتیجه با اطلاعات داوطلبی
                    </h2>
                    <div className="flex flex-row-reverse gap-2 items-center justify-end">
                      <label className="text-nowrap"> شماره داوطلبی</label>
                      <input
                        className="w-[190px] border p-1 rounded"
                        placeholder=" "
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-row-reverse gap-2 items-center justify-end">
                      <label className="text-nowrap"> شماره شناسنامه</label>
                      <input
                        type="password"
                        className="w-[190px] border p-1 rounded"
                        placeholder=""
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    {/* CAPTCHA */}

                    <input
                      className="w-full border p-2 rounded"
                      dir="rtl"
                      placeholder="عبارت امنیتی"
                      // value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                    />

                    <button className="w-full mt-14 bg-gradient-to-b border-pu-500 border from-pink-200 to-pink-500 text-black py-2 rounded">
                      مشاهده نتیجه
                    </button>
                  </div>
                </form>
              </div>

              <div className="flex items-center justify-between flex-row-reverse justify-center gap-4 py-6">
                 <span>عبارت مقابل را عينا در کادر عبارت امنیتی درج كنيد </span>
                <div className="bg-gray-200  rounded font-mono text-lg tracking-widest ">
                 
                  <button
                    type="button"
                    onClick={generateCaptcha}
                    className="text-2xl text-gray-800 font-semibold px-16 py-3 "
                  >
                    
                    {captcha}
                  </button>
                </div>
              </div>
        </div>

        <div className="flex flex-row-reverse py-4 px-2 bg-gray-200 justify-between">
          <div dir="rtl">سایت سنجش آموزش کشور</div>
          <div>© 2016 Sanjesh Organization</div>
        </div>
      </div>
    </div>
  );
}
