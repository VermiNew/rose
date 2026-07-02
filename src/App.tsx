import Sidebar from './ui/sidebar/Sidebar'
import WelcomeScreen from './ui/welcome/WelcomeScreen'
import './styles/layout.css'

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-area">
        <WelcomeScreen />
      </main>
    </div>
  )
}

export default App
