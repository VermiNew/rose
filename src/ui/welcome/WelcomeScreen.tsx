import './WelcomeScreen.css'

function WelcomeScreen() {
  return (
    <section className="welcome-screen" aria-labelledby="welcome-heading">
      <h1 className="greeting" id="welcome-heading">
        W czym mogę Ci dzisiaj pomóc?
      </h1>
    </section>
  )
}

export default WelcomeScreen
