export default function AppBar() {
  return (
    <header
      className="flex items-center justify-between w-full"
      style={{ padding: '8px 16px', fontFamily: "'Albert Sans', sans-serif" }}
    >
      {/* Logotipo */}
      <span style={{ fontSize: '24px', fontWeight: 600, color: '#0D0D0D' }}>
        El Notas
      </span>

      {/* Acciones derecha: Tag + Avatar */}
      <div className="flex items-center" style={{ gap: '8px' }}>
        {/* Tag Free */}
        <span
          style={{
            fontFamily: "'Albert Sans', sans-serif",
            fontSize: '14px',
            fontWeight: 500,
            color: '#7C3AED',
            backgroundColor: '#EDE9FE',
            borderRadius: '999px',
            padding: '3px 12px',
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
            overflow: 'hidden',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '22px',
          }}
        >
          🧑‍🎨
        </div>
      </div>
    </header>
  )
}
