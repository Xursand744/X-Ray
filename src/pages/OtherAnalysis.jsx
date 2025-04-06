import ImageAnalyzer from "../Components/ImageAnalyzer"

function OtherAnalysis() {
  const otherConditions = ["To'r pardasi ajralishi", "Teri shikastlanishi", "Suyak zichligi anomaliyasi"]

  return (
    <div>
      <div className="pb-5 border-b border-gray-200">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-7 text-gray-900">
          Boshqa tibbiy tasvirlar tahlili
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Potentsial holatlar va anomaliyalarni aniqlash uchun boshqa turdagi tibbiy tasvirlarni yuklang.
        </p>
      </div>

      <div className="mt-6">
        <ImageAnalyzer
          title="Boshqa tibbiy tasvirlar tahlili"
          description="Bizning sun'iy intellektimiz turli boshqa tibbiy tasvirlarni tahlil qilib, 3 ta keng tarqalgan holatni ishonch foizlari bilan aniqlaydi."
          resultTypes={otherConditions}
        />
      </div>

      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg leading-6 font-medium text-gray-900">Boshqa tibbiy tasvirlar tahlili haqida</h2>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="prose max-w-3xl text-gray-500">
            <p>
              Bu bo'lim asosiy toifalarga kirmaydigan maxsus tibbiy tasvirlash turlarini, masalan, ko'z to'r pardasi
              skanlari, dermatologik tasvirlar, DEXA skanlari va boshqalarni boshqaradi.
            </p>
            <p className="mt-4">Bizning tizimimiz quyidagi keng tarqalgan holatlarni aniqlay oladi:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <strong>To'r pardasi ajralishi:</strong> To'r pardasining ko'z orqa qismidan ajralishi
              </li>
              <li>
                <strong>Teri shikastlanishi:</strong> Kasallikni ko'rsatishi mumkin bo'lgan teridagi anomal to'qima
              </li>
              <li>
                <strong>Suyak zichligi anomaliyasi:</strong> Osteoporozni ko'rsatishi mumkin bo'lgan suyak mineral
                zichligidagi muammolar
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherAnalysis

