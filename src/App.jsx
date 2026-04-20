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

    setMessages((prev) => [
      ...prev,
      { type: 'user', text },
      { type: 'loading' },
    ])
    setInputValue('')

    setTimeout(() => {
      setMessages((prev) => [
        ...prev.filter((m) => m.type !== 'loading'),
        { type: 'ai' },
      ])
    }, 2000)
  }

  return (
    <div className="flex flex-col h-screen bg-white max-w-sm mx-auto">
      <AppBar />

      <div className="flex-1 overflow-y-auto">
        {isEmpty ? (
          <EmptyState showChips={!inputFocused} onChipSelect={handleSend} />
        ) : (
          <ChatArea messages={messages} />
        )}
      </div>

      {inputFocused && isEmpty && (
        <SuggestionChips onSelect={(chip) => setInputValue(chip)} className="pb-1" />
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
