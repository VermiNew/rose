import { Component, type ErrorInfo, type ReactNode } from 'react'
import './ErrorBoundary.css'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

// Catches render-time errors in the subtree and shows a fallback instead of
// a blank screen. Resetting `hasError` remounts the children and gives them
// another chance — useful when the crash was caused by transient state.
class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, info)
  }

  handleReset = (): void => {
    this.setState({ hasError: false })
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="error-boundary" role="alert">
          <p className="error-boundary-message">
            Coś poszło nie tak. Spróbuj ponownie.
          </p>
          <button
            className="error-boundary-retry"
            onClick={this.handleReset}
            type="button"
          >
            Spróbuj ponownie
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
