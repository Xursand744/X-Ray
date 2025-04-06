import { Link } from "react-router";
import Banner from "../assets/banner.png";


function Home() {
  return (
    <div className="flex flex-wrap xl:flex-nowrap">
      <div className="w-full xl:max-w-[600px]">
        <img className="w-full h-full" src={Banner} alt="" />
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Tibbiy tasvirlar anomaliyalarini aniqlash</h1>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Sun'iy intellekt yordamida tibbiy tasvirlarni tahlil qilish
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
        <div className="prose max-w-3xl text-gray-500">
          <p className="text-base sm:text-lg">
            MedScan AI platformasiga xush kelibsiz, bu turli xil tibbiy tasvirlardagi anomaliyalarni aniqlash uchun
            ilg'or platforma.
          </p>

          <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mt-6">Bu qanday ishlaydi</h2>
          <p>
            Bizning platformamiz tibbiy tasvirlarni tahlil qilish va potentsial anomaliyalarni aniqlash uchun eng
            zamonaviy sun'iy intellektdan foydalanadi. Shunchaki tibbiy tasviringizni yuklang, va bizning tizimimiz uni
            qayta ishlab, mumkin bo'lgan holatlarni ishonch foizlari bilan aniqlaydi.
          </p>

          <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mt-6">
            Qo'llab-quvvatlanadigan tasvir turlari
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Rentgen tasvirlari</strong> - Pnevmoniya, sinishlar va boshqa anomaliyalarni aniqlash
            </li>
            <li>
              <strong>KT skanerlari</strong> - Turli holatlar uchun kompyuter tomografiyasi tasvirlarini tahlil qilish
            </li>
            <li>
              <strong>MRT skanerlari</strong> - To'qimalarni batafsil tahlil qilish uchun magnit-rezonans tasvirlarni
              qayta ishlash
            </li>
            <li>
              <strong>Ultratovush tasvirlari</strong> - Turli holatlar uchun ultratovush tasvirlarini tekshirish
            </li>
            <li>
              <strong>Boshqa tibbiy tasvirlar</strong> - Qo'shimcha maxsus tasvirlash turlari uchun qo'llab-quvvatlash
            </li>
          </ul>

        

         
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
