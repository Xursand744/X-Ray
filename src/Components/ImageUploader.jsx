"use client"

import { useState } from "react"

function ImageUploader({ title, description, onAnalyze }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [diagnosis, setDiagnosis] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedImage(file)
      setImagePreview(URL.createObjectURL(file))
      setDiagnosis(null)
      setError(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!selectedImage) return

    setIsLoading(true)
    setError(null)

    try {
      // Placeholder for your custom image analysis logic
      // Add your implementation here

      // For demonstration purposes only:
      setTimeout(() => {
        setDiagnosis("This is a placeholder for the diagnosis result. Please implement your own analysis logic.")
        setIsLoading(false)
      }, 1500)
    } catch (err) {
      setError(`Error analyzing image: ${err.message}`)
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
          <div className="flex items-center space-x-4">
            <label className="block">
              <span className="sr-only">Choose file</span>
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
              className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white 
                ${!selectedImage || isLoading ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"}`}
            >
              {isLoading ? "Analyzing..." : "Analyze Image"}
            </button>
          </div>
        </form>

        {imagePreview && (
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-900">Image Preview</h4>
            <div className="mt-2 border-2 border-gray-200 rounded-md overflow-hidden max-w-md">
              <img src={imagePreview || "/placeholder.svg"} alt="Preview" className="w-full h-auto" />
            </div>
          </div>
        )}

        {error && <div className="mt-4 text-sm text-red-600">{error}</div>}

        {diagnosis && (
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-900">Diagnosis</h4>
            <div className="mt-2 p-4 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-700">{diagnosis}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageUploader

