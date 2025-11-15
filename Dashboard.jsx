import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />

        <div className="p-8">
          <h1 className="text-3xl font-semibold text-gray-800">
            Welcome to your Dashboard 👋
          </h1>
          <p className="text-gray-600 mt-2">
            This is where you will see job recommendations, applications, and more.
          </p>

          {/* Placeholder for future widgets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-lg font-semibold">Total Jobs Applied</h2>
              <p className="text-4xl font-bold mt-4 text-blue-600">0</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-lg font-semibold">Job Matches</h2>
              <p className="text-4xl font-bold mt-4 text-green-600">5</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-lg font-semibold">Notifications</h2>
              <p className="text-4xl font-bold mt-4 text-red-600">2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
