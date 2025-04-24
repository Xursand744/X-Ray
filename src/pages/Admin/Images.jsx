"use client"

import { useState } from "react"
import { Search, Filter, Download, Trash2 } from "lucide-react"

function AdminImages() {
  // Mock data for uploaded images
  const initialImages = [
    {
      id: 1,
      name: "Chest_XRay_001.jpg",
      type: "Rentgen",
      uploadedBy: "Aziz Karimov",
      uploadDate: "2023-04-15",
      status: "Tahlil qilingan",
      findings: "Pnevmoniya (78%)",
    },
    {
      id: 2,
      name: "Brain_MRI_045.jpg",
      type: "MRT",
      uploadedBy: "Malika Rahimova",
      uploadDate: "2023-04-14",
      status: "Tahlil qilingan",
      findings: "Anomaliya topilmadi",
    },
    {
      id: 3,
      name: "Abdomen_CT_103.jpg",
      type: "KT",
      uploadedBy: "Jasur Toshmatov",
      uploadDate: "2023-04-14",
      status: "Tahlil qilingan",
      findings: "Jigar shikastlanishi (45%)",
    },
    {
      id: 4,
      name: "Pregnancy_US_027.jpg",
      type: "Ultratovush",
      uploadedBy: "Nilufar Ahmedova",
      uploadDate: "2023-04-13",
      status: "Tahlil qilingan",
      findings: "Anomaliya topilmadi",
    },
    {
      id: 5,
      name: "Knee_XRay_089.jpg",
      type: "Rentgen",
      uploadedBy: "Bobur Saidov",
      uploadDate: "2023-04-12",
      status: "Tahlil qilingan",
      findings: "Sinish (92%)",
    },
    {
      id: 6,
      name: "Thyroid_US_056.jpg",
      type: "Ultratovush",
      uploadedBy: "Zarina Umarova",
      uploadDate: "2023-04-11",
      status: "Tahlil qilingan",
      findings: "Qalqonsimon bez tugunlari (67%)",
    },
    {
      id: 7,
      name: "Spine_MRI_034.jpg",
      type: "MRT",
      uploadedBy: "Rustam Qodirov",
      uploadDate: "2023-04-10",
      status: "Tahlil qilingan",
      findings: "Umurtqa disklari churrasi (81%)",
    },
    {
      id: 8,
      name: "Chest_CT_078.jpg",
      type: "KT",
      uploadedBy: "Gulnora Karimova",
      uploadDate: "2023-04-09",
      status: "Tahlil qilingan",
      findings: "O'pka emboliyasi (23%)",
    },
  ]

  const [images, setImages] = useState(initialImages)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("Barchasi")
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [imageToDelete, setImageToDelete] = useState(null)

  // Filter images based on search term and type
  const filteredImages = images.filter((image) => {
    const matchesSearch =
      image.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.uploadedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.findings.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesType = selectedType === "Barchasi" || image.type === selectedType

    return matchesSearch && matchesType
  })

  const handleDeleteClick = (image) => {
    setImageToDelete(image)
    setIsDeleteModalOpen(true)
  }

  const confirmDelete = () => {
    if (imageToDelete) {
      setImages(images.filter((image) => image.id !== imageToDelete.id))
      setIsDeleteModalOpen(false)
      setImageToDelete(null)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Tasvirlar boshqaruvi</h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <Download className="h-4 w-4 mr-2" />
          Hisobotni yuklab olish
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 shadow rounded-lg">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Qidirish..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center">
            <Filter className="h-5 w-5 text-gray-400 mr-2" />
            <select
              className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="Barchasi">Barcha tasvirlar</option>
              <option value="Rentgen">Rentgen</option>
              <option value="KT">KT</option>
              <option value="MRT">MRT</option>
              <option value="Ultratovush">Ultratovush</option>
            </select>
          </div>
        </div>
      </div>

      {/* Images Table */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tasvir
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Turi
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Yuklagan
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Sana
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Natijalar
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Amallar
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredImages.map((image) => (
                <tr key={image.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded">
                        <div className="h-10 w-10 rounded flex items-center justify-center text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{image.name}</div>
                        <div className="text-sm text-gray-500">{image.status}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        image.type === "Rentgen"
                          ? "bg-blue-100 text-blue-800"
                          : image.type === "KT"
                            ? "bg-purple-100 text-purple-800"
                            : image.type === "MRT"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {image.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{image.uploadedBy}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{image.uploadDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{image.findings}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-4">
                      <Download className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900" onClick={() => handleDeleteClick(image)}>
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <Trash2 className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Tasvirni o'chirish</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Siz rostdan ham {imageToDelete?.name} tasvirini o'chirmoqchimisiz? Bu amalni qaytarib bo'lmaydi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={confirmDelete}
                >
                  O'chirish
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsDeleteModalOpen(false)}
                >
                  Bekor qilish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminImages
