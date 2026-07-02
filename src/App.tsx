import { useState } from 'react'
import Sidebar from './ui/sidebar/Sidebar'
import ConversationScreen from './ui/conversation/ConversationScreen'
import WelcomeScreen from './ui/welcome/WelcomeScreen'
import './styles/layout.css'

function App() {
  const [activeChatId, setActiveChatId] = useState<string | null>(null)

  return (
    <div className="app-layout">
      <Sidebar
        activeChatId={activeChatId}
        onNewChat={() => setActiveChatId(null)}
        onSelectChat={setActiveChatId}
      />
      <main className="main-area">
        {activeChatId ? <ConversationScreen /> : <WelcomeScreen />}
      </main>
    </div>
  )
}

export default App
