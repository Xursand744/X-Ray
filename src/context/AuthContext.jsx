"use client"

import { createContext, useContext, useState, useEffect } from "react"

// Create the authentication context
const AuthContext = createContext(null)

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext)

// Auth provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Check for existing user in localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  // Login function
  const login = (userData) => {
    // Store user data in localStorage
    localStorage.setItem("user", JSON.stringify(userData))
    setUser(userData)
    return true
  }

  // Logout function
  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
  }

  // Register function
  const register = (userData) => {
    // In a real app, you would send this to your backend
    // For now, we'll store registered users in localStorage
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]")

    // Check if email already exists
    const emailExists = registeredUsers.some((user) => user.email === userData.email)
    if (emailExists) {
      return { success: false, message: "Email already registered" }
    }

    // Add new user to registered users
    registeredUsers.push(userData)
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers))

    // Auto-login after registration
    login(userData)

    return { success: true }
  }

  // Check if a user exists with given credentials
  const checkCredentials = (email, password) => {
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]")
    const user = registeredUsers.find((user) => user.email === email && user.password === password)
    return user || null
  }

  const value = {
    user,
    loading,
    login,
    logout,
    register,
    checkCredentials,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
