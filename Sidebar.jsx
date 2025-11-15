import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>

      <ul className="space-y-4">
        <li>
          <Link to="/dashboard" className="hover:text-blue-400">Home</Link>
        </li>
        <li>
          <Link to="#" className="hover:text-blue-400">Jobs</Link>
        </li>
        <li>
          <Link to="#" className="hover:text-blue-400">My Applications</Link>
        </li>
        <li>
          <Link to="#" className="hover:text-blue-400">Profile</Link>
        </li>
      </ul>
    </div>
  );
}
