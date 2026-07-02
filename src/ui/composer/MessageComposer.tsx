import { useState, type FormEvent } from 'react'
import { LuArrowUp, LuPlus } from 'react-icons/lu'
import './MessageComposer.css'

interface MessageComposerProps {
  onSend?: (content: string) => void
}

function MessageComposer({ onSend }: MessageComposerProps) {
  const [draft, setDraft] = useState('')
  const trimmedDraft = draft.trim()
  const canSend = Boolean(onSend && trimmedDraft)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!onSend || !trimmedDraft) {
      return
    }

    onSend(trimmedDraft)
    setDraft('')
  }

  return (
    <form
      aria-label="Edytor wiadomości"
      className="message-composer"
      onSubmit={handleSubmit}
    >
      <textarea
        aria-label="Wiadomość"
        className="input"
        maxLength={4000}
        onChange={(event) => setDraft(event.target.value)}
        placeholder="Napisz wiadomość…"
        rows={3}
        value={draft}
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
          disabled={!canSend}
          type="submit"
        >
          <LuArrowUp aria-hidden="true" />
        </button>
      </div>
    </form>
  )
}

export default MessageComposer
