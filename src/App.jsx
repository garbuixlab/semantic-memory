import { useState } from 'react'
import AppBar from './components/AppBar'
import EmptyState from './components/EmptyState'
import ChatArea from './components/ChatArea'
import SuggestionChips from './components/SuggestionChips'
import ChatInput from './components/ChatInput'

export default function App() {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [inputFocused, setInputFocused] = useState(false)

  const isEmpty = messages.length === 0

  const handleSend = (text) => {
    if (!text.trim()) return
    setMessages((prev) => [...prev, { type: 'user', text }, { type: 'loading' }])
    setInputValue('')
    setTimeout(() => {
      setMessages((prev) => [
        ...prev.filter((m) => m.type !== 'loading'),
        { type: 'ai' },
      ])
    }, 2000)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100dvh',          /* dvh para evitar el salto del browser bar en móvil */
        backgroundColor: 'white',
        maxWidth: '384px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Header persistente */}
      <AppBar />

      {/* Área de scroll — pb-32 deja espacio para el footer fixed */}
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: '136px' }}>
        {isEmpty ? (
          <EmptyState showChips={!inputFocused} onChipSelect={handleSend} />
        ) : (
          <ChatArea messages={messages} />
        )}
      </div>

      {/* Chips flotantes sobre el footer cuando el input está activo */}
      {inputFocused && isEmpty && (
        <div style={{ position: 'fixed', bottom: '136px', left: 0, right: 0, maxWidth: '384px', margin: '0 auto' }}>
          <SuggestionChips onSelect={(chip) => setInputValue(chip)} />
        </div>
      )}

      <ChatInput
        value={inputValue}
        onChange={setInputValue}
        onSend={handleSend}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        isActive={inputFocused}
      />
    </div>
  )
}
