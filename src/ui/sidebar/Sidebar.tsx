import roseLogo from '../../assets/branding/rose-primary.png'
import './Sidebar.css'

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
    </aside>
  )
}

export default Sidebar
