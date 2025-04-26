"use client"

import { useState } from "react"
import { Link } from "react-router"
import { X } from "lucide-react"
import { useAuth } from "../context/AuthContext"

function AuthPrompt({ onClose }) {
  const [isVisible, setIsVisible] = useState(true)
  const { isAuthenticated } = useAuth()

  // If user is already authenticated, don't show the prompt
  if (isAuthenticated) {
    if (onClose) onClose()
    return null
  }

  const handleClose = () => {
    setIsVisible(false)
    if (onClose) onClose()
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="relative p-6">
          

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">MedScan AI platformasiga xush kelibsiz</h2>
            <p className="text-gray-600">
              Tibbiy tasvirlar anomaliyalarini aniqlash uchun sun'iy intellekt platformamizdan foydalanish uchun tizimga
              kiring yoki ro'yxatdan o'ting.
            </p>
          </div>

          <div className="space-y-4">
            <Link
              to="/login"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Tizimga kirish
            </Link>

            <Link
              to="/register"
              className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Ro'yxatdan o'tish
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPrompt
