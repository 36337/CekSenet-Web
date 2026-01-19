export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <p className="mt-2 text-gray-600">Çek/Senet Takip Sistemi - Web Versiyonu</p>
      
      {/* TODO: Dashboard istatistikleri eklenecek */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-white p-6 shadow">
          <p className="text-sm text-gray-500">Toplam Evrak</p>
          <p className="mt-2 text-3xl font-semibold">-</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <p className="text-sm text-gray-500">Portföyde</p>
          <p className="mt-2 text-3xl font-semibold">-</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <p className="text-sm text-gray-500">Vadesi Yaklaşan</p>
          <p className="mt-2 text-3xl font-semibold">-</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <p className="text-sm text-gray-500">Toplam Tutar</p>
          <p className="mt-2 text-3xl font-semibold">-</p>
        </div>
      </div>
    </div>
  )
}
