import { useState } from 'react'
import MessageComposer from '../composer/MessageComposer'
import './ConversationScreen.css'

type MessageRole = 'user' | 'assistant'

interface ChatMessage {
  id: string
  role: MessageRole
  sender: string
  content: string
}

const initialMessages: readonly ChatMessage[] = [
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
]

function ConversationScreen() {
  const [messages, setMessages] =
    useState<readonly ChatMessage[]>(initialMessages)

  function handleSendMessage(content: string) {
    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: crypto.randomUUID(),
        role: 'user',
        sender: 'Ty',
        content,
      },
    ])
  }

  return (
    <section className="conversation-screen" aria-label="Rozmowa">
      <ol className="message-list" aria-live="polite">
        {messages.map((message) => (
          <li className={`message ${message.role}`} key={message.id}>
            <span className="sender">{message.sender}</span>
            <p>{message.content}</p>
          </li>
        ))}
      </ol>
      <footer className="composer-area">
        <MessageComposer onSend={handleSendMessage} />
      </footer>
    </section>
  )
}

export default ConversationScreen
