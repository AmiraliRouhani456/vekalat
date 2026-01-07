import { useParams, useNavigate } from "react-router-dom";
import TopBar from "../components/module/TopBar";
import SeeAndPrint from "../components/module/SeeAndPrint";
import { FiAlertTriangle } from "react-icons/fi";
import { PiDotsNineBold } from "react-icons/pi";

export default function Dashboard() {
  const { username } = useParams();
  const navigate = useNavigate();

  const lessons = [
    { id: 1, name: "حقوق مدنی", score: "-3/33" },
    { id: 2, name: "آیین دادرسی مدنی", score: "16/67" },
    { id: 3, name: "حقوق تجارت", score: "-8/33" },
    { id: 4, name: "اصول استنباط حقوق اسلامی و فقه", score: "سفید" },
    { id: 5, name: "حقوق جزای عمومی و اختصاصی", score: "10/53" },
    { id: 6, name: "آیین دادرسی کیفری", score: "-3/33" },
    { id: 7, name: "حقوق اساسی", score: "15/00" },
  ];

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div  className="bg-white min-h-screen">
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
نتایج آزمون کارآموزی وکالت براساس قانون تسهیل صدور مجوز های کسب و کار بدون ظرفیت و با لحاظ تراز نمرات اعلام شده است. 
                    </span>
                  </li>


                  <li className="flex gap-1 items-center">
                    <PiDotsNineBold />
                    <span>
در صورت هرگونه سوال در رابطه با نمره آزمون و یا سهمیه شرکت در آزمون، می توانید موضوع خود را فقط در قسمت سیستم پاسخگویی این سازمان حداکثر تا تاریخ 1404/09/29 مطرح نمایند. 
                    </span>
                  </li>

                                    <li className="flex gap-1 items-center">
                    <PiDotsNineBold />
                    <span>
داوطلبان دارای حد نصاب ، به اطلاعیه های کانون متبوع خود و مهلت های اعلام شد جهت ثبت نام در سایت اختصاصی آن کانون توجه فرمایند.                    </span>
                  </li>
                </ul>
              </div>
      </div>


      <div dir="rtl" className="px-8 mt-6 flex gap-4">
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-400 text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 py-2 px-3 text-center w-16">درس</th>
                <th className="border border-gray-400 py-2 px-3 text-center">نام درس</th>
                <th className="border border-gray-400 py-2 px-3 text-center w-40">نمره خام(ص د)</th>
              </tr>
            </thead>
            <tbody>
              {lessons.map((row) => (
                <tr key={row.id}>
                  <td className="border border-gray-400 py-2 px-3 text-center bg-gray-100 font-semibold">
                    {row.id}
                  </td>
                  <td className="border border-gray-400 py-2 px-3 text-center">{row.name}</td>
                  <td className="border border-gray-400 py-2 px-3 text-center">{row.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

                <div className="overflow-x-auto">
          <table className="w-full border border-gray-400 text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 py-2 px-3 text-center w-16">درس</th>
                <th className="border border-gray-400 py-2 px-3 text-center">نام درس</th>
                <th className="border border-gray-400 py-2 px-3 text-center w-40">نمره خام(ص د)</th>
              </tr>
            </thead>
            <tbody>
              {lessons.map((row) => (
                <tr key={row.id}>
                  <td className="border border-gray-400 py-2 px-3 text-center bg-gray-100 font-semibold">
                    {row.id}
                  </td>
                  <td className="border border-gray-400 py-2 px-3 text-center">{row.name}</td>
                  <td className="border border-gray-400 py-2 px-3 text-center">{row.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
