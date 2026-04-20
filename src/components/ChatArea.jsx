import { useEffect, useRef } from 'react'
import ArchiveBox from './ArchiveBox'
import NoteCard from './NoteCard'

export default function ChatArea({ messages }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="flex flex-col px-4 py-4 gap-4">
      {messages.map((msg, i) => {
        if (msg.type === 'user') {
          return (
            <div key={i} className="bg-violet-50 rounded-2xl px-4 py-3 self-start max-w-[85%]">
              <p className="text-sm text-gray-700 leading-relaxed">{msg.text}</p>
            </div>
          )
        }

        if (msg.type === 'loading') {
          return (
            <div key={i} className="flex items-center gap-3">
              <ArchiveBox size="sm" />
              <div className="flex-1 h-1 bg-violet-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-violet-400 to-violet-600 rounded-full animate-pulse w-3/4" />
              </div>
            </div>
          )
        }

        if (msg.type === 'ai') {
          return (
            <div key={i} className="flex flex-col gap-1">
              <div className="flex items-start gap-3">
                <ArchiveBox size="sm" />
                <p className="text-sm text-gray-800 leading-relaxed flex-1">
                  <span className="text-violet-600 font-medium">Perfecte, he creat una carpeta d'</span>
                  <span className="text-violet-600 font-bold">App de Notes amb IA</span>
                  <span className="text-violet-600 font-medium"> i hi he afegit la nota de text.</span>
                </p>
              </div>

              <NoteCard
                title="Títol de la nota"
                folder="Carpeta de la nota"
                date="10/03/2026"
                summary="Proposta per: Implementar una visualització de les relacions i connexions entre notes, tipu Mapa Mental."
              />

              <p className="text-violet-500 text-xs text-center mt-1">✦ Pensat durant 3 segons</p>
            </div>
          )
        }

        return null
      })}
      <div ref={bottomRef} />
    </div>
  )
}
