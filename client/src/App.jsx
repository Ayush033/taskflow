import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Header from './components/Header.jsx'
import ProjectGrid from './components/ProjectGrid.jsx'
import Modal from './components/Modal.jsx'

const initialProjects = [
  { name: "Website Redesign", tasks: 12, done: 8, color: "bg-violet-600" },
  { name: "Mobile App", tasks: 24, done: 5, color: "bg-blue-600" },
  { name: "Marketing Campaign", tasks: 8, done: 8, color: "bg-emerald-600" },
  { name: "API Integration", tasks: 16, done: 3, color: "bg-amber-600" },
]

const colors = [
  "bg-violet-600", "bg-blue-600", "bg-emerald-600",
  "bg-amber-600", "bg-pink-600", "bg-red-600"
]

function App() {
  const [projects, setProjects] = useState(initialProjects)
  const [showModal, setShowModal] = useState(false)

  function addProject(name) {
    const newProject = {
      name,
      tasks: 0,
      done: 0,
      color: colors[projects.length % colors.length],
    }
    setProjects([...projects, newProject])
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Sidebar />
      <main className="ml-64 p-8">
        <Header onAddProject={() => setShowModal(true)} />
        <ProjectGrid projects={projects} />
      </main>
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          onSubmit={addProject}
        />
      )}
    </div>
  )
}

export default App