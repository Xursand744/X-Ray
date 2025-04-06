import ImageAnalyzer from "../Components/ImageAnalyzer"

function UltrasoundAnalysis() {
  const ultrasoundConditions = ["O't toshi", "Qalqonsimon bez tugunlari", "Tuxumdon kistasi", "Homila anomaliyasi"]

  return (
    <div>
      <div className="pb-5 border-b border-gray-200">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-7 text-gray-900">
          Ultratovush tasviri tahlili
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Potentsial holatlar va anomaliyalarni aniqlash uchun ultratovush tasvirini yuklang.
        </p>
      </div>

      <div className="mt-6">
        <ImageAnalyzer
          title="Ultratovush tasviri tahlili"
          description="Bizning sun'iy intellektimiz ultratovush tasvirlarini tahlil qilib, 4 ta keng tarqalgan holatni ishonch foizlari bilan aniqlaydi."
          resultTypes={ultrasoundConditions}
        />
      </div>

      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg leading-6 font-medium text-gray-900">Ultratovush tahlili haqida</h2>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="prose max-w-3xl text-gray-500">
            <p>
              Ultratovush tasvirlash tananing ichki qismini tasvirlash uchun yuqori chastotali tovush to'lqinlaridan
              foydalanadi. U odatda ichki organlar, qon tomirlari va homiladorlik paytida rivojlanayotgan homilani
              tekshirish uchun ishlatiladi.
            </p>
            <p className="mt-4">Bizning tizimimiz quyidagi keng tarqalgan holatlarni aniqlay oladi:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <strong>O't toshi:</strong> O't pufagida hosil bo'ladigan qattiq cho'kindilar
              </li>
              <li>
                <strong>Qalqonsimon bez tugunlari:</strong> Qalqonsimon bezda hujayralarning anomal o'sishi
              </li>
              <li>
                <strong>Tuxumdon kistasi:</strong> Tuxumdon ustida yoki ichida hosil bo'ladigan suyuqlik to'ldirilgan
                xalta
              </li>
              <li>
                <strong>Homila anomaliyasi:</strong> Rivojlanayotgan homilada tuzilish yoki rivojlanish muammolari
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UltrasoundAnalysis

