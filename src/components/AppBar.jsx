export default function AppBar() {
  return (
    <header className="flex items-center justify-between px-5 pt-4 pb-3">
      <h1 className="text-xl font-semibold text-gray-900 tracking-tight">El Notas</h1>
      <div className="flex items-center gap-2">
        <span className="border border-violet-500 text-violet-600 text-xs font-medium px-3 py-0.5 rounded-full">
          Free
        </span>
        <div className="w-9 h-9 rounded-full bg-amber-100 overflow-hidden flex items-center justify-center text-lg">
          🧑‍🎨
        </div>
      </div>
    </header>
  )
}
