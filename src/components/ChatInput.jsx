import { useRef } from 'react'

const font = "'Albert Sans', sans-serif"

function FolderIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function MicIcon({ color = '#404040' }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M19 10a7 7 0 0 1-14 0" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="8" y1="22" x2="16" y2="22" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

export default function ChatInput({ value, onChange, onSend, onFocus, onBlur, isActive }) {
  const inputRef = useRef(null)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (value.trim()) onSend(value)
    }
  }

  return (
    <div
      style={{
        position: 'sticky',
        bottom: 0,
        backgroundColor: 'white',
        padding: '24px 16px',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>

        {/* Burbuja 1 — Carpeta (solo en estado pasivo) */}
        {!isActive && (
          <button
            style={{
              width: '62px',
              height: '62px',
              minWidth: '62px',
              borderRadius: '50%',
              backgroundColor: '#F6F6F6',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <FolderIcon />
          </button>
        )}

        {/* Burbuja 2 — Input */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#F6F6F6',
            borderRadius: '999px',
            padding: '8px 16px',
            gap: '8px',
          }}
        >
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={handleKeyDown}
            placeholder="Comenta'm, cari"
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontFamily: font,
              fontSize: '14px',
              color: '#0D0D0D',
            }}
          />

          {/* Icono Micrófono — área táctil 40×40 */}
          <button
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <MicIcon color={isActive ? '#8427FF' : '#404040'} />
          </button>

          {/* Botón Enviar — solo en estado activo */}
          {isActive && (
            <button
              onMouseDown={(e) => {
                e.preventDefault()
                if (value.trim()) onSend(value)
              }}
              style={{
                width: '32px',
                height: '32px',
                minWidth: '32px',
                borderRadius: '50%',
                backgroundColor: '#8427FF',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              <ArrowIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
