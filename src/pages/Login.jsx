"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { useAuth } from "../context/AuthContext"

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const navigate = useNavigate()
  const { login, checkCredentials } = useAuth()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email.trim()) {
      newErrors.email = "Email kiritilishi shart"
    }

    if (!formData.password) {
      newErrors.password = "Parol kiritilishi shart"
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)

    try {
      // Check if user exists with these credentials
      const user = checkCredentials(formData.email, formData.password)

      if (!user) {
        setErrors({
          submit: "Noto'g'ri email yoki parol. Agar ro'yxatdan o'tmagan bo'lsangiz, iltimos avval ro'yxatdan o'ting.",
        })
        setIsSubmitting(false)
        return
      }

      // Login successful
      login(user)

      // Redirect based on role
      if (user.role === "admin") {
        navigate("/admin")
      } else {
        navigate("/")
      }
    } catch (error) {
      console.error("Login error:", error)
      setErrors({ submit: "Kirishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Tizimga kirish</h2>

        {errors.submit && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">{errors.submit}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Parol
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Eslab qolish
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Parolni unutdingizmi?
              </a>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Kirish..." : "Kirish"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Hisobingiz yo'qmi?{" "}
            <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
              Ro'yxatdan o'tish
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
