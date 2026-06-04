function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-900 border-r border-gray-800 flex flex-col px-4 py-6">
      
      <div className="mb-10">
        <h1 className="text-xl font-semibold text-white">TaskFlow</h1>
        <p className="text-xs text-gray-500 mt-1">Project Management</p>
      </div>

      <nav className="flex flex-col gap-1">
        {[
          { label: "Dashboard", icon: "📊" },
          { label: "My Tasks", icon: "✅" },
          { label: "Projects", icon: "📁" },
          { label: "Team", icon: "👥" },
          { label: "Settings", icon: "⚙️" },
        ].map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors text-sm text-left"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-gray-800">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-xs font-semibold">
            YN
          </div>
          <div>
            <p className="text-sm font-medium text-white">Your Name</p>
            <p className="text-xs text-gray-500">Free plan</p>
          </div>
        </div>
      </div>

    </aside>
  )
}

export default Sidebar