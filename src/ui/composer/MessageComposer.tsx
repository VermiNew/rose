import { LuArrowUp, LuPlus } from 'react-icons/lu'
import './MessageComposer.css'

function MessageComposer() {
  return (
    <div className="message-composer">
      <textarea
        aria-label="Wiadomość"
        className="input"
        placeholder="Napisz wiadomość…"
        rows={3}
      />
      <div className="actions">
        <button
          aria-label="Dodaj załącznik"
          className="icon-button attachment"
          disabled
          type="button"
        >
          <LuPlus aria-hidden="true" />
        </button>
        <button
          aria-label="Wyślij wiadomość"
          className="icon-button send"
          disabled
          type="button"
        >
          <LuArrowUp aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

export default MessageComposer
