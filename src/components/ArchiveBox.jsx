export default function ArchiveBox({ size = 'lg' }) {
  const dim = size === 'sm' ? 'w-10 h-10 text-3xl' : 'w-20 h-20 text-6xl'
  return (
    <div className={`${dim} flex items-center justify-center`}>
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Box body */}
        <rect x="8" y="32" width="64" height="40" rx="4" fill="#2aaa77" />
        {/* Box lid */}
        <rect x="4" y="24" width="72" height="12" rx="3" fill="#1d8a5f" />
        {/* Folders */}
        <rect x="18" y="8" width="14" height="28" rx="3" fill="#f87171" />
        <rect x="33" y="4" width="14" height="32" rx="3" fill="#fbbf24" />
        <rect x="48" y="10" width="14" height="26" rx="3" fill="#60a5fa" />
        {/* Folder tabs */}
        <rect x="18" y="8" width="8" height="5" rx="2" fill="#ef4444" />
        <rect x="33" y="4" width="8" height="5" rx="2" fill="#f59e0b" />
        <rect x="48" y="10" width="8" height="5" rx="2" fill="#3b82f6" />
        {/* Box handle */}
        <rect x="34" y="28" width="12" height="4" rx="2" fill="#155e43" />
      </svg>
    </div>
  )
}
