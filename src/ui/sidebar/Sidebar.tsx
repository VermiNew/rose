import roseLogo from '../../assets/branding/rose-primary.png'
import './Sidebar.css'

const recentChats = [
  { id: 'chat-1', title: 'Przykładowa rozmowa 1' },
  { id: 'chat-2', title: 'Przykładowa rozmowa 2' },
  { id: 'chat-3', title: 'Przykładowa rozmowa 3' },
  { id: 'chat-4', title: 'Przykładowa rozmowa 4' },
] as const

const activeChatId = 'chat-1'

function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Główna nawigacja">
      <div className="sidebar__brand">
        <span className="sidebar__logo-frame" aria-hidden="true">
          <img className="sidebar__logo" src={roseLogo} alt="" />
        </span>
        <span className="sidebar__brand-name">Rose</span>
      </div>

      <button className="sidebar__new-chat" type="button">
        <svg
          aria-hidden="true"
          className="sidebar__new-chat-icon"
          viewBox="0 0 20 20"
        >
          <path d="M10 4v12M4 10h12" />
        </svg>
        <span>Nowy czat</span>
      </button>

      <section className="sidebar__history" aria-labelledby="recent-chats-heading">
        <h2 className="sidebar__section-title" id="recent-chats-heading">
          Ostatnie
        </h2>
        <ul className="sidebar__chat-list">
          {recentChats.map((chat) => {
            const isActive = chat.id === activeChatId

            return (
              <li
                aria-current={isActive ? 'page' : undefined}
                className={`sidebar__chat-item${isActive ? ' sidebar__chat-item--active' : ''}`}
                key={chat.id}
              >
                {chat.title}
              </li>
            )
          })}
        </ul>
      </section>
    </aside>
  )
}

export default Sidebar
