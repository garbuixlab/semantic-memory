import { useRef } from 'react'

const font = "'Albert Sans', sans-serif"

function FolderIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function MicIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M19 10a7 7 0 0 1-14 0" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="8" y1="22" x2="16" y2="22" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true"
    >
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
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        maxWidth: '384px',     /* max-w-sm para coincidir con App */
        margin: '0 auto',
        padding: '24px 16px',
        backgroundColor: 'white',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>

        {/* ── Burbuja 1: Carpeta ── animación de desaparición */}
        <div
          style={{
            width: isActive ? '0px' : '64px',
            minWidth: isActive ? '0px' : '64px',
            opacity: isActive ? 0 : 1,
            transform: isActive ? 'scale(0.95)' : 'scale(1)',
            overflow: 'hidden',
            transition: 'width 300ms ease-in-out, min-width 300ms ease-in-out, opacity 250ms ease-in-out, transform 250ms ease-in-out',
          }}
        >
          <button
            aria-label="Obrir carpetes"
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#F6F6F6',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <FolderIcon />
          </button>
        </div>

        {/* ── Burbuja 2: Input ── se expande al 100% */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#F6F6F6',
            borderRadius: '999px',
            padding: '8px 8px 8px 16px',
            gap: '4px',
            transition: 'all 300ms ease-in-out',
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
            aria-label="Escriu un missatge"
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontFamily: font,
              fontSize: '16px',
              color: '#171717',
              minWidth: 0,
            }}
          />

          {/* Micrófono — tap target 48×48 */}
          <button
            aria-label="Dictar missatge"
            style={{
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              flexShrink: 0,
              borderRadius: '50%',
            }}
          >
            <MicIcon />
          </button>

          {/* Botón Enviar — aparece en estado activo */}
          <div
            style={{
              width: isActive ? '40px' : '0px',
              height: '40px',
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'scale(1)' : 'scale(0.8)',
              overflow: 'hidden',
              transition: 'width 300ms ease-in-out, opacity 250ms ease-in-out, transform 250ms ease-in-out',
              flexShrink: 0,
            }}
          >
            <button
              onMouseDown={(e) => {
                e.preventDefault()
                if (value.trim()) onSend(value)
              }}
              aria-label="Enviar missatge"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#8427FF',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
