import { LuArrowUp, LuPlus } from 'react-icons/lu'
import './WelcomeScreen.css'

function WelcomeScreen() {
  return (
    <section className="welcome-screen" aria-labelledby="welcome-heading">
      <div className="content">
        <h1 className="greeting" id="welcome-heading">
          W czym mogę Ci dzisiaj pomóc?
        </h1>

        <div className="composer">
          <textarea
            aria-label="Wiadomość"
            className="message-input"
            placeholder="Napisz wiadomość…"
            rows={3}
          />
          <div className="composer-actions">
            <button
              aria-label="Dodaj załącznik"
              className="icon-button attachment-button"
              disabled
              type="button"
            >
              <LuPlus aria-hidden="true" />
            </button>
            <button
              aria-label="Wyślij wiadomość"
              className="icon-button send-button"
              disabled
              type="button"
            >
              <LuArrowUp aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeScreen
