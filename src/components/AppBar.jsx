const font = "'Albert Sans', sans-serif"

export default function AppBar() {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 16px',
        backgroundColor: 'white',
        boxSizing: 'border-box',
        minHeight: '64px',
      }}
    >
      {/* Logotipo */}
      <span
        style={{
          fontFamily: font,
          fontSize: '24px',
          fontWeight: 700,
          color: '#171717',
          letterSpacing: '-0.3px',
        }}
      >
        El Notas
      </span>

      {/* Acciones derecha */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>

        {/* Tag Free — tap target 48px mínimo */}
        <div style={{ minHeight: '48px', display: 'flex', alignItems: 'center' }}>
          <span
            style={{
              fontFamily: font,
              fontSize: '16px',
              fontWeight: 700,
              color: '#8427FF',
              backgroundColor: '#F5F3FF',
              border: '1px solid #C99FFF',
              borderRadius: '999px',
              padding: '4px 14px',
              lineHeight: 1.4,
              display: 'inline-block',
            }}
          >
            Free
          </span>
        </div>

        {/* Avatar — 48px + 4px border exterior */}
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
            boxSizing: 'border-box',
          }}
          aria-label="Avatar de l'usuari"
        >
          🧑‍🎨
        </div>
      </div>
    </header>
  )
}
