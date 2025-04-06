import ImageAnalyzer from "../Components/ImageAnalyzer"

function CTAnalysis() {
  const ctConditions = ["Miya qon quyilishi", "Jigar shikastlanishi", "O'pka emboliyasi", "Qorin aortasi anevrizmasi"]

  return (
    <div>
      <div className="pb-5 border-b border-gray-200">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-7 text-gray-900">KT skanerlash tahlili</h1>
        <p className="mt-2 text-sm text-gray-500">
          Potentsial holatlar va anomaliyalarni aniqlash uchun KT skanerlash tasvirini yuklang.
        </p>
      </div>

      <div className="mt-6">
        <ImageAnalyzer
          title="KT skanerlash tahlili"
          description="Bizning sun'iy intellektimiz kompyuter tomografiyasi tasvirlarini tahlil qilib, 4 ta keng tarqalgan holatni ishonch foizlari bilan aniqlaydi."
          resultTypes={ctConditions}
        />
      </div>

      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg leading-6 font-medium text-gray-900">KT skanerlash tahlili haqida</h2>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="prose max-w-3xl text-gray-500">
            <p>
              Kompyuter tomografiyasi (KT) skanerlari tana atrofidagi turli burchaklardan olingan rentgen tasvirlarini
              birlashtiradi va suyaklar, qon tomirlari va yumshoq to'qimalarning ko'ndalang kesimli tasvirlarini
              yaratadi.
            </p>
            <p className="mt-4">Bizning tizimimiz quyidagi keng tarqalgan holatlarni aniqlay oladi:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <strong>Miya qon quyilishi:</strong> Miya to'qimasi ichida yoki atrofidagi bo'shliqlarida qon ketishi
              </li>
              <li>
                <strong>Jigar shikastlanishi:</strong> Jigardagi kasallikni ko'rsatishi mumkin bo'lgan anomal to'qima
              </li>
              <li>
                <strong>O'pka emboliyasi:</strong> O'pkadagi o'pka arteriyalaridan birida to'siq
              </li>
              <li>
                <strong>Qorin aortasi anevrizmasi:</strong> Qorindagi aortaning kengayishi
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTAnalysis

