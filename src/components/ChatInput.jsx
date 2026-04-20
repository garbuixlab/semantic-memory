import { useRef } from 'react'
import { Mic, ArrowRight, Folder } from 'lucide-react'

export default function ChatInput({ value, onChange, onSend, onFocus, onBlur, isActive }) {
  const inputRef = useRef(null)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (value.trim()) onSend(value)
    }
  }

  return (
    <div className={`transition-colors duration-200 ${isActive ? 'bg-gray-100' : 'bg-white border-t border-gray-100'}`}>
      <div className="flex items-center gap-3 px-4 py-3">
        {/* Folder icon */}
        <button className="p-1.5 text-gray-400 flex-shrink-0">
          <Folder size={22} />
        </button>

        {/* Input pill */}
        <div className={`flex-1 flex items-center gap-2 rounded-full px-4 py-2.5 transition-colors duration-200 ${
          isActive ? 'bg-gray-200' : 'border border-gray-200 bg-white'
        }`}>
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={handleKeyDown}
            placeholder="Comenta'm, cari"
            className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
          />
          <button className="text-gray-400 flex-shrink-0">
            <Mic size={18} className={isActive ? 'text-violet-500' : ''} />
          </button>
          {isActive && (
            <button
              onMouseDown={(e) => {
                e.preventDefault()
                if (value.trim()) onSend(value)
              }}
              className="w-7 h-7 bg-violet-600 rounded-full flex items-center justify-center flex-shrink-0"
            >
              <ArrowRight size={14} className="text-white" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
