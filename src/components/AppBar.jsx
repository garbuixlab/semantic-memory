const font = "'Albert Sans', sans-serif"

export default function AppBar() {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 16px',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Logotipo */}
      <span style={{ fontFamily: font, fontSize: '24px', fontWeight: 700, color: '#0D0D0D' }}>
        El Notas
      </span>

      {/* Acciones derecha */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {/* Tag Free */}
        <span
          style={{
            fontFamily: font,
            fontSize: '14px',
            fontWeight: 700,
            color: '#C99FFF',
            backgroundColor: '#FAF5FF',
            border: '1px solid #C99FFF',
            borderRadius: '999px',
            padding: '3px 12px',
            lineHeight: 1.4,
          }}
        >
          Free
        </span>

        {/* Avatar */}
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            border: '4px solid #F6F6F6',
            backgroundColor: '#E5E7EB',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '22px',
            overflow: 'hidden',
          }}
        >
          🧑‍🎨
        </div>
      </div>
    </header>
  )
}
