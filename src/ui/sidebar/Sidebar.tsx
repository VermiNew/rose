import { LuPlus, LuUserRound } from 'react-icons/lu'
import roseLogo from '../../assets/branding/rose-primary.png'
import './Sidebar.css'

const recentChats = [
  { id: 'chat-1', title: 'Przykładowa rozmowa 1' },
  { id: 'chat-2', title: 'Przykładowa rozmowa 2' },
  { id: 'chat-3', title: 'Przykładowa rozmowa 3' },
  { id: 'chat-4', title: 'Przykładowa rozmowa 4' },
] as const

interface SidebarProps {
  activeChatId: string | null
  onNewChat: () => void
  onSelectChat: (chatId: string) => void
}

function Sidebar({ activeChatId, onNewChat, onSelectChat }: SidebarProps) {
  return (
    <aside className="sidebar" aria-label="Główna nawigacja">
      <div className="brand">
        <span className="logo-frame" aria-hidden="true">
          <img className="logo" src={roseLogo} alt="" />
        </span>
        <span className="brand-name">Rose</span>
      </div>

      <button className="new-chat" type="button" onClick={onNewChat}>
        <LuPlus aria-hidden="true" className="new-chat-icon" />
        <span>Nowy czat</span>
      </button>

      <section className="history" aria-labelledby="recent-chats-heading">
        <h2 className="section-title" id="recent-chats-heading">
          Ostatnie
        </h2>
        <ul className="chat-list">
          {recentChats.map((chat) => {
            const isActive = chat.id === activeChatId

            return (
              <li key={chat.id}>
                <button
                  aria-current={isActive ? 'page' : undefined}
                  className={isActive ? 'chat-item active' : 'chat-item'}
                  onClick={() => onSelectChat(chat.id)}
                  type="button"
                >
                  {chat.title}
                </button>
              </li>
            )
          })}
        </ul>
      </section>

      <footer className="profile" aria-label="Profil użytkownika">
        <span className="profile-avatar" aria-hidden="true">
          <LuUserRound />
        </span>
        <span className="profile-details">
          <span className="profile-name">Gość</span>
          <span className="profile-plan">Konto lokalne</span>
        </span>
      </footer>
    </aside>
  )
}

export default Sidebar
