const CHIPS = ['Recupera l\'últim tema', 'Nova URL', 'Tasques per avui']

export default function SuggestionChips({ onSelect, className = '' }) {
  return (
    <div className={`flex flex-wrap justify-center gap-2 px-4 py-2 ${className}`}>
      {CHIPS.map((chip) => (
        <button
          key={chip}
          onClick={() => onSelect?.(chip)}
          className="border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 bg-white hover:bg-gray-50 transition-colors"
        >
          {chip}
        </button>
      ))}
    </div>
  )
}
