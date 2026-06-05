import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Header from './components/Header.jsx'
import ProjectGrid from './components/ProjectGrid.jsx'

const initialProjects = [
  { name: "Website Redesign", tasks: 12, done: 8, color: "bg-violet-600" },
  { name: "Mobile App", tasks: 24, done: 5, color: "bg-blue-600" },
  { name: "Marketing Campaign", tasks: 8, done: 8, color: "bg-emerald-600" },
  { name: "API Integration", tasks: 16, done: 3, color: "bg-amber-600" },
]

function App() {
  const [projects, setProjects] = useState(initialProjects)

  function addProject() {
    const newProject = {
      name: `New Project ${projects.length + 1}`,
      tasks: 0,
      done: 0,
      color: "bg-pink-600",
    }
    setProjects([...projects, newProject])
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Sidebar />
      <main className="ml-64 p-8">
        <Header onAddProject={addProject} />
        <ProjectGrid projects={projects} />
      </main>
    </div>
  )
}

export default App