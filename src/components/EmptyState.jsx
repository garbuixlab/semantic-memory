import ArchiveBox from './ArchiveBox'
import SuggestionChips from './SuggestionChips'

export default function EmptyState({ showChips, onChipSelect }) {
  return (
    <div className="flex flex-col items-center px-6 pt-10 pb-4">
      <ArchiveBox size="lg" />

      <p className="text-violet-600 text-xl font-medium text-center mt-5 mb-3 leading-snug">
        Envia'm qualsevol idea i jo m'encarrego de guardar-la on toca
      </p>

      <p className="text-gray-400 text-sm text-center leading-relaxed mb-6">
        Pots enviar text, audio o imatges. "El Notas" ho organitzarà per tu
        perquè ho puguis recuperar més endavant. També pots fer cerques a
        través del xat o recuperar idees.
      </p>

      {showChips && <SuggestionChips onSelect={onChipSelect} />}
    </div>
  )
}
