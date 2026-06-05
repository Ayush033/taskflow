function Header({ onAddProject }) {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h2 className="text-2xl font-semibold text-white">Dashboard</h2>
        <p className="text-sm text-gray-500 mt-1">Welcome back, here's your overview</p>
      </div>
      <button
        onClick={onAddProject}
        className="bg-violet-600 hover:bg-violet-700 transition-colors px-4 py-2 rounded-lg text-sm font-medium"
      >
        + New Project
      </button>
    </header>
  )
}

export default Header