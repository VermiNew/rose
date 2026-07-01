import roseLogo from '../../assets/branding/rose-primary.png'
import './Sidebar.css'

const recentChatTitles = [
  'Przykładowa rozmowa 1',
  'Przykładowa rozmowa 2',
  'Przykładowa rozmowa 3',
  'Przykładowa rozmowa 4',
] as const

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
          {recentChatTitles.map((title) => (
            <li className="sidebar__chat-item" key={title}>
              {title}
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}

export default Sidebar
