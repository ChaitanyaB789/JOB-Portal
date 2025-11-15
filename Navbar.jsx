export default function Navbar() {
  return (
    <div className="w-full bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">AI Job Portal</h1>
      
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Logout
      </button>
    </div>
  );
}
