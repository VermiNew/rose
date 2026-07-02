import MessageComposer from '../composer/MessageComposer'
import './ConversationScreen.css'

const mockMessages = [
  {
    id: 'message-1',
    role: 'user',
    sender: 'Ty',
    content: 'Potrzebuję pomocy w zaplanowaniu nauki TypeScriptu.',
  },
  {
    id: 'message-2',
    role: 'assistant',
    sender: 'Rose',
    content:
      'Jasne. Zacznijmy od określenia Twojego obecnego poziomu i czasu, który możesz przeznaczyć na naukę.',
  },
] as const

function ConversationScreen() {
  return (
    <section className="conversation-screen" aria-label="Rozmowa">
      <ol className="message-list" aria-live="polite">
        {mockMessages.map((message) => (
          <li className={`message ${message.role}`} key={message.id}>
            <span className="sender">{message.sender}</span>
            <p>{message.content}</p>
          </li>
        ))}
      </ol>
      <footer className="composer-area">
        <MessageComposer />
      </footer>
    </section>
  )
}

export default ConversationScreen
