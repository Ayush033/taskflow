function ProjectGrid({ projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((p) => {
        const percent = p.tasks > 0 ? Math.round((p.done / p.tasks) * 100) : 0
        return (
          <div
            key={p.name}
            className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors"
          >
            <div className={`w-10 h-10 rounded-lg ${p.color} mb-4`}></div>
            <h3 className="font-medium text-white">{p.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{p.done} of {p.tasks} tasks done</p>
            <div className="mt-4 h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className={`h-full ${p.color}`} style={{ width: `${percent}%` }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">{percent}% complete</p>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectGrid