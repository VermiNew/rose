import './ConversationScreen.css'

function ConversationScreen() {
  return (
    <section className="conversation-screen" aria-label="Rozmowa">
      <div className="message-list" aria-live="polite" />
    </section>
  )
}

export default ConversationScreen
