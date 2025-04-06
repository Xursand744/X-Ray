"use client"

import { useState } from "react"
import { Routes, Route, Link } from "react-router"
import Home from "./pages/Home"
import XRayAnalysis from "./pages/XRayAnalysis"
import CTAnalysis from "./pages/CTAnalysis"
import MRIAnalysis from "./pages/MRIAnalysis"
import UltrasoundAnalysis from "./pages/UltrasoundAnalysis"
import OtherAnalysis from "./pages/OtherAnalysis"
import { Menu, X } from "lucide-react"

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
   
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link   to="/" className="text-xl font-bold text-gray-900">MedScan AI</Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
               
                  <Link
                    to="/xray"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Rentgen
                  </Link>
                  <Link
                    to="/ct"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    KT skanerlash
                  </Link>
                  <Link
                    to="/mri"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    MRT
                  </Link>
                  <Link
                    to="/ultrasound"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Ultratovush
                  </Link>
                  <Link
                    to="/other"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Boshqa
                  </Link>
                </div>
              </div>
              <div className="flex items-center sm:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={toggleMobileMenu}
                >
                  <span className="sr-only">Menyuni ochish</span>
                  {mobileMenuOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="sm:hidden" id="mobile-menu">
              <div className="pt-2 pb-3 space-y-1">
              
                <Link
                  to="/xray"
                  className="bg-white border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Rentgen
                </Link>
                <Link
                  to="/ct"
                  className="bg-white border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  KT skanerlash
                </Link>
                <Link
                  to="/mri"
                  className="bg-white border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  MRT
                </Link>
                <Link
                  to="/ultrasound"
                  className="bg-white border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Ultratovush
                </Link>
                <Link
                  to="/other"
                  className="bg-white border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Boshqa
                </Link>
              </div>
            </div>
          )}
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/xray" element={<XRayAnalysis />} />
              <Route path="/ct" element={<CTAnalysis />} />
              <Route path="/mri" element={<MRIAnalysis />} />
              <Route path="/ultrasound" element={<UltrasoundAnalysis />} />
              <Route path="/other" element={<OtherAnalysis />} />
            </Routes>
          </div>
        </main>
      </div>

  )
}

export default App

