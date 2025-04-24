import { BarChart3, Users, ImageIcon, Settings, FileText } from "lucide-react"

function AdminDashboard() {
  // Mock data for the dashboard
  const stats = [
    { id: 1, name: "Jami foydalanuvchilar", value: "1,284", icon: Users, change: "+12.5%" },
    { id: 2, name: "Yuklangan tasvirlar", value: "5,347", icon: ImageIcon, change: "+23.1%" },
    { id: 3, name: "Tahlil qilingan tasvirlar", value: "4,926", icon: FileText, change: "+18.4%" },
    { id: 4, name: "Anomaliyalar aniqlangan", value: "1,543", icon: BarChart3, change: "+7.2%" },
  ]

  // Mock data for recent activities
  const recentActivities = [
    { id: 1, user: "Aziz Karimov", action: "Rentgen tasviri yukladi", time: "5 daqiqa oldin" },
    { id: 2, user: "Malika Rahimova", action: "MRT tasviri tahlil qilindi", time: "15 daqiqa oldin" },
    { id: 3, user: "Jasur Toshmatov", action: "Yangi hisob yaratdi", time: "32 daqiqa oldin" },
    { id: 4, user: "Nilufar Ahmedova", action: "KT skanerlash tahlil qilindi", time: "1 soat oldin" },
    { id: 5, user: "Bobur Saidov", action: "Ultratovush tasviri yukladi", time: "2 soat oldin" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Admin boshqaruv paneli</h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <Settings className="h-4 w-4 mr-2" />
          Sozlamalar
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                    <dd>
                      <div className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                          {stat.change}
                        </div>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">So'nggi faoliyat</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 truncate">{activity.user}</p>
                <div className="ml-2 flex-shrink-0 flex">
                  <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {activity.time}
                  </p>
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <p className="flex items-center text-sm text-gray-500">{activity.action}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
