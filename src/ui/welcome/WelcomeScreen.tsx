import MessageComposer from '../composer/MessageComposer'
import './WelcomeScreen.css'

function WelcomeScreen() {
  return (
    <section className="welcome-screen" aria-labelledby="welcome-heading">
      <div className="content">
        <h1 className="greeting" id="welcome-heading">
          W czym mogę Ci dzisiaj pomóc?
        </h1>

        <MessageComposer />
      </div>
    </section>
  )
}

export default WelcomeScreen
