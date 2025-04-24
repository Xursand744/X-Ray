"use client"

import { useState } from "react"
import { Save } from "lucide-react"

function AdminSettings() {
  const [settings, setSettings] = useState({
    siteName: "MedScan AI",
    siteDescription: "Tibbiy tasvirlar anomaliyalarini aniqlash platformasi",
    emailNotifications: true,
    userRegistration: true,
    maintenanceMode: false,
    apiKey: "sk_test_medscan_ai_123456789",
    modelVersion: "v2.1",
    confidenceThreshold: 70,
    maxUploadSize: 10,
    retentionPeriod: 30,
  })

  const [isSaving, setIsSaving] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSaving(true)
    setSaveSuccess(false)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simulate successful save
      setSaveSuccess(true)

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSaveSuccess(false)
      }, 3000)
    } catch (error) {
      console.error("Settings save error:", error)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Tizim sozlamalari</h1>
      </div>

      {saveSuccess && (
        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-green-700">Sozlamalar muvaffaqiyatli saqlandi.</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Asosiy sozlamalar</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Platformaning asosiy sozlamalarini o'zgartiring.</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="siteName" className="block text-sm font-medium text-gray-700">
                  Sayt nomi
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="siteName"
                    id="siteName"
                    value={settings.siteName}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-700">
                  Sayt tavsifi
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="siteDescription"
                    id="siteDescription"
                    value={settings.siteDescription}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="emailNotifications"
                      name="emailNotifications"
                      type="checkbox"
                      checked={settings.emailNotifications}
                      onChange={handleChange}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="emailNotifications" className="font-medium text-gray-700">
                      Email xabarnomalarini yoqish
                    </label>
                    <p className="text-gray-500">
                      Foydalanuvchilarga tahlil natijalari haqida email xabarnomalarini yuborish.
                    </p>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-6">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="userRegistration"
                      name="userRegistration"
                      type="checkbox"
                      checked={settings.userRegistration}
                      onChange={handleChange}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="userRegistration" className="font-medium text-gray-700">
                      Foydalanuvchi ro'yxatdan o'tishini yoqish
                    </label>
                    <p className="text-gray-500">Yangi foydalanuvchilar ro'yxatdan o'tishiga ruxsat berish.</p>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-6">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="maintenanceMode"
                      name="maintenanceMode"
                      type="checkbox"
                      checked={settings.maintenanceMode}
                      onChange={handleChange}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="maintenanceMode" className="font-medium text-gray-700">
                      Texnik xizmat rejimi
                    </label>
                    <p className="text-gray-500">
                      Saytni texnik xizmat rejimiga o'tkazish. Faqat adminlar kirishi mumkin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">AI model sozlamalari</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Sun'iy intellekt modelining sozlamalarini o'zgartiring.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700">
                  API kalit
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    name="apiKey"
                    id="apiKey"
                    value={settings.apiKey}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="modelVersion" className="block text-sm font-medium text-gray-700">
                  Model versiyasi
                </label>
                <div className="mt-1">
                  <select
                    id="modelVersion"
                    name="modelVersion"
                    value={settings.modelVersion}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option value="v1.0">v1.0 (Eski)</option>
                    <option value="v2.0">v2.0 (Barqaror)</option>
                    <option value="v2.1">v2.1 (Tavsiya etilgan)</option>
                    <option value="v3.0-beta">v3.0 (Beta)</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="confidenceThreshold" className="block text-sm font-medium text-gray-700">
                  Ishonch chegarasi (%)
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="confidenceThreshold"
                    id="confidenceThreshold"
                    min="0"
                    max="100"
                    value={settings.confidenceThreshold}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="maxUploadSize" className="block text-sm font-medium text-gray-700">
                  Maksimal yuklash hajmi (MB)
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="maxUploadSize"
                    id="maxUploadSize"
                    min="1"
                    value={settings.maxUploadSize}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="retentionPeriod" className="block text-sm font-medium text-gray-700">
                  Saqlash muddati (kunlar)
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="retentionPeriod"
                    id="retentionPeriod"
                    min="1"
                    value={settings.retentionPeriod}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSaving}
              className={`ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                isSaving ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              <Save className="h-4 w-4 mr-2" />
              {isSaving ? "Saqlanmoqda..." : "Saqlash"}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AdminSettings
