import Sidebar from './components/Sidebar.jsx'
import Header from './components/Header.jsx'
import ProjectGrid from './components/ProjectGrid.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Sidebar />
      <main className="ml-64 p-8">
        <Header />
        <ProjectGrid />
      </main>
    </div>
  )
}

export default App