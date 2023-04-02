import { useState } from 'react'
import { AuthProvider } from 'react-auth-kit'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider authType={'cookie'}
      authName={'_auth'}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}>
      <div className="App">
        <h1>Hello, World!!!</h1>
      </div>
    </AuthProvider>

  )
}

export default App
