import { useParams, useNavigate } from "react-router-dom";
import TopBar from "../components/module/TopBar";
import SeeAndPrint from "../components/module/SeeAndPrint";
import { FiAlertTriangle } from "react-icons/fi";
import { PiDotsNineBold } from "react-icons/pi";
import Footer from "../components/module/Footer";

export default function Dashboard() {
  const { username } = useParams();
  const navigate = useNavigate();

  const lessons = [
    { id: 1, name: "حقوق مدنی", score: "20" },
    { id: 2, name: "آیین دادرسی مدنی", score: "30/14" },
    { id: 3, name: "حقوق تجارت", score: "سفید" },
    { id: 4, name: "اصول استنباط حقوق اسلامی و فقه", score: "56/78" },
    { id: 5, name: "حقوق جزای عمومی و اختصاصی", score: "50" },
    { id: 6, name: "آیین دادرسی کیفری", score: "60/32" },
    { id: 7, name: "حقوق اساسی", score: "70" },
  ];

  // اطلاعات فردی برای جدول سمت راست
  const profile = {
    caseNumber: "4069979",
    candidateNumber: "122439",
    nationalId: "0021262292",
    lastName: "علیاری",
    firstName: "انسیه",
    fatherName: "کاظم",
    birthYear: "1377",
    idNumber: "21262292",
    gender: "زن",
    quota: "آزاد",
    kanun: "مرکز/ استان تهران /",
    finalScore: "3536",
    thresholdQuota: "6981",
    rankCountryQuota: "66651",
    status: "شما حدنصاب آزمون را به دست آورده اید ",
  };

  const infoRows = [
    { label: "شماره پرونده", value: profile.caseNumber },
    { label: "شماره داوطلبی", value: profile.candidateNumber },
    { label: "شماره ملی", value: profile.nationalId },
    { label: "نام خانوادگی", value: profile.lastName },
    { label: "نام", value: profile.firstName },
    { label: "نام پدر", value: profile.fatherName },
    { label: "سال تولد", value: profile.birthYear },
    { label: "شماره شناسنامه", value: profile.idNumber },
    { label: "جنس", value: profile.gender },
    { label: "سهمیه", value: profile.quota },
    { label: "حوزه", value: profile.kanun },
    { label: "نمره کل تراز نهایی", value: profile.finalScore },
    { label: "حد نصاب در سهمیه", value: profile.thresholdQuota },
    { label: "رتبه در کشور و سهمیه", value: profile.rankCountryQuota },
  ];

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div  className="bg-white ">
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


      <div dir="rtl" className="px-8 mt-6 flex gap-8 items-center">

        <div className="overflow-x-auto w-1/2">
          <table className="w-full border border-gray-400 text-sm">
            <tbody>
              <tr>
                <td colSpan="2" className="border border-gray-400 py-2 px-3">
                  <img src="/img/PictureHandler.jpg" alt="" className="block mx-auto" />
                </td>
              </tr>
              {infoRows.map((row, idx) => (
                <tr key={idx}>
                  <td className="border border-gray-400 py-1 px-3 text-center font-medium">
                    {row.label}
                  </td>
                  <td className="border border-gray-400 py-1 px-3 text-center bg-gray-100">
                    {row.value}
                  </td>

                </tr>
              ))}
              <tr>
                <td colSpan="2" className="border border-gray-400 py-2 px-3 text-center text-green-700">
                  {profile.status}
                </td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className="overflow-x-auto w-1/2 ">
          <table className="w-full border border-gray-400 text-sm " >
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 py-1 px-3 text-center w-16">درس</th>
                <th className="border border-gray-400 py-1 px-3 text-center">نام درس</th>
                <th className="border border-gray-400 py-1 px-3 text-center w-40">نمره خام(از صد)</th>
              </tr>
            </thead>
            <tbody>
              {lessons.map((row) => (
                <tr key={row.id}>
                  <td className="border border-gray-400 py-1 px-3 text-center bg-gray-100 font-semibold">
                    {row.id}
                  </td>
                  <td className="border border-gray-400 py-1 px-3 text-center">{row.name}</td>
                  <td className="border border-gray-400 py-1 px-3 text-center">{row.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


      </div>

      <button onClick={logout}>Logout</button>

      <Footer />
    </div>
  );
}
