import { LayoutDashboard, BarChart2, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen glass p-6">
      <h1 className="text-2xl font-bold mb-10">🚦 Traffic AI</h1>

      <div className="space-y-6 text-gray-300">
        <div className="flex gap-3 hover:text-white cursor-pointer">
          <LayoutDashboard size={18}/> Dashboard
        </div>
        <div className="flex gap-3 hover:text-white cursor-pointer">
          <BarChart2 size={18}/> Analytics
        </div>
        <div className="flex gap-3 hover:text-white cursor-pointer">
          <Settings size={18}/> Control
        </div>
      </div>
    </div>
  );
}