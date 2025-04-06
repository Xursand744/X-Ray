import ImageAnalyzer from "../Components/ImageAnalyzer"

function XRayAnalysis() {
  const xrayConditions = ["Pnevmoniya", "Sinish", "Sil kasalligi", "O'pka saratoni", "Plevral effuziya"]

  return (
    <div>
      <div className="pb-5 border-b border-gray-200">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-7 text-gray-900">Rentgen tasviri tahlili</h1>
        <p className="mt-2 text-sm text-gray-500">
          Potentsial holatlar va anomaliyalarni aniqlash uchun rentgen tasvirini yuklang.
        </p>
      </div>

      <div className="mt-6">
        <ImageAnalyzer
          title="Rentgen tasviri tahlili"
          description="Bizning sun'iy intellektimiz rentgen tasvirlarini tahlil qilib, 5 ta keng tarqalgan holatni ishonch foizlari bilan aniqlaydi."
          resultTypes={xrayConditions}
        />
      </div>

      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg leading-6 font-medium text-gray-900">Rentgen tahlili haqida</h2>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="prose max-w-3xl text-gray-500">
            <p>
              Rentgen tasvirlash eng qadimgi va keng tarqalgan tibbiy tasvirlash shakllaridan biridir. U tananing ichki
              qismini, ayniqsa suyaklar, ko'krak qafasi va qorin bo'shlig'ini tekshirish uchun foydali bo'lgan
              tasvirlarni yaratish uchun radiatsiyadan foydalanadi.
            </p>
            <p className="mt-4">Bizning tizimimiz quyidagi keng tarqalgan holatlarni aniqlay oladi:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <strong>Pnevmoniya:</strong> O'pkadagi havo xaltachalarini yallig'lantiruvchi infektsiya
              </li>
              <li>
                <strong>Sinish:</strong> Rentgen tasvirlarida ko'rinadigan singan suyaklar
              </li>
              <li>
                <strong>Sil kasalligi:</strong> Asosan o'pkani zararlantiruvchi bakterial infektsiya
              </li>
              <li>
                <strong>O'pka saratoni:</strong> O'pka to'qimasida anomal hujayralar o'sishi
              </li>
              <li>
                <strong>Plevral effuziya:</strong> O'pka atrofidagi ortiqcha suyuqlik
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default XRayAnalysis

