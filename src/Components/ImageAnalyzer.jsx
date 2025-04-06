import { useState, useEffect } from "react"

function ImageAnalyzer({ title, description, resultTypes }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [results, setResults] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [loadingStage, setLoadingStage] = useState("")
  const [error, setError] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedImage(file)
      setImagePreview(URL.createObjectURL(file)) // Tasvirni ko'rsatish uchun preview
      setResults(null)
      setError(null)
    }
  }

  useEffect(() => {
    let interval
    if (isLoading) {
      interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 2
        })
      }, 100)
    }
    return () => clearInterval(interval)
  }, [isLoading])

  useEffect(() => {
    if (loadingProgress < 30) {
      setLoadingStage("Tasvir tayyorlanmoqda...")
    } else if (loadingProgress < 60) {
      setLoadingStage("Anomaliyalar aniqlanmoqda...")
    } else if (loadingProgress < 90) {
      setLoadingStage("Natijalar tahlil qilinmoqda...")
    } else if (loadingProgress >= 90) {
      setLoadingStage("Hisobot yaratilmoqda...")
    }
  }, [loadingProgress])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!selectedImage) return

    setIsLoading(true)
    setLoadingProgress(0)
    setError(null)
    setResults(null)

    try {
      // Simulate longer analysis with random percentages
      setTimeout(() => {
        const simulatedResults = {}
        resultTypes.forEach((type) => {
          // Always set bone fracture (Sinish) to 0%
          if (type === "Sinish" || type === "Miya qon quyilishi" || type === "Miya o'smasi") {
            simulatedResults[type] = 0
          } else {
            simulatedResults[type] = Math.floor(Math.random() * 100)
          }
        })
        setResults(simulatedResults)
        setIsLoading(false)
      }, 5000) // Increased to 5 seconds for more realistic feeling
    } catch (err) {
      setError(`Rasmni tahlil qilishda xatolik: ${err.message}`)
      console.error(err)
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>{description}</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <label className="block w-full sm:w-auto">
              <span className="sr-only">Fayl tanlang</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
              />
            </label>
            <button
              type="submit"
              disabled={!selectedImage || isLoading}
              className={`w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white 
                ${!selectedImage || isLoading ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"}`}
            >
              {isLoading ? "Tahlil qilinmoqda..." : "Rasmni tahlil qilish"}
            </button>
          </div>
        </form>

        {isLoading && (
          <div className="mt-6">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">{loadingStage}</span>
              <span className="text-sm font-medium text-gray-700">{loadingProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 italic">
              Tahlil jarayoni bir necha soniya davom etadi. Iltimos, kuting...
            </div>
          </div>
        )}

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {imagePreview && (
            <div>
              <h4 className="text-sm font-medium text-gray-900">Rasm ko'rinishi</h4>
              <div className="mt-2 border-2 border-gray-200 rounded-md overflow-hidden">
                <img src={imagePreview || "/placeholder.svg"} alt="Ko'rinish" className="w-full h-auto" />
              </div>
            </div>
          )}

          {results && (
            <div>
              <h4 className="text-sm font-medium text-gray-900">Tahlil natijalari</h4>
              <div className="mt-2 p-4 bg-gray-50 rounded-md">
                {Object.entries(results).map(([condition, percentage]) => (
                  <div key={condition} className="mb-3">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{condition}</span>
                      <span className="text-sm font-medium text-gray-700">{percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {error && <div className="mt-4 text-sm text-red-600">{error}</div>}
      </div>
    </div>
  )
}

export default ImageAnalyzer
