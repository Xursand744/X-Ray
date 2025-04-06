import ImageAnalyzer from "../Components/ImageAnalyzer"

function MRIAnalysis() {
  const mriConditions = [
    "Miya o'smasi",
    "Multipleks skleroz",
    "Umurtqa disklari churrasi",
    "Tizza meniskusi yirtilishi",
  ]

  return (
    <div>
      <div className="pb-5 border-b border-gray-200">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-7 text-gray-900">MRT skanerlash tahlili</h1>
        <p className="mt-2 text-sm text-gray-500">
          Potentsial holatlar va anomaliyalarni aniqlash uchun MRT skanerlash tasvirini yuklang.
        </p>
      </div>

      <div className="mt-6">
        <ImageAnalyzer
          title="MRT skanerlash tahlili"
          description="Bizning sun'iy intellektimiz magnit-rezonans tasvirlarni tahlil qilib, 4 ta keng tarqalgan holatni ishonch foizlari bilan aniqlaydi."
          resultTypes={mriConditions}
        />
      </div>

      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg leading-6 font-medium text-gray-900">MRT tahlili haqida</h2>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="prose max-w-3xl text-gray-500">
            <p>
              Magnit-rezonans tasvirlash (MRT) organlar va to'qimalarning batafsil tasvirlarini yaratish uchun kuchli
              magnit maydonlari va radio to'lqinlaridan foydalanadi. MRT ayniqsa yumshoq to'qimalar va asab tizimini
              tekshirish uchun foydalidir.
            </p>
            <p className="mt-4">Bizning tizimimiz quyidagi keng tarqalgan holatlarni aniqlay oladi:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <strong>Miya o'smasi:</strong> Miyada hujayralarning anomal o'sishi
              </li>
              <li>
                <strong>Multipleks skleroz:</strong> Markaziy asab tizimiga ta'sir qiluvchi kasallik
              </li>
              <li>
                <strong>Umurtqa disklari churrasi:</strong> Yaqin asablarga bosim berishi mumkin bo'lgan umurtqa
                diskining yorilishi
              </li>
              <li>
                <strong>Tizza meniskusi yirtilishi:</strong> Tizza bo'g'imidagi tog'ayning shikastlanishi
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MRIAnalysis

