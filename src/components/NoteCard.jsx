import { FileText } from 'lucide-react'

export default function NoteCard({ title, folder, date, summary }) {
  return (
    <div className="border border-violet-200 rounded-2xl overflow-hidden bg-white mt-3">
      <div className="flex items-start gap-3 p-4">
        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
          <FileText size={16} className="text-gray-500" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900 text-sm">{title}</p>
          <p className="text-xs text-gray-400 mt-0.5">{folder} · {date}</p>
        </div>
      </div>

      <div className="border-t border-gray-100 px-4 py-3">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-4 h-4 bg-violet-600 rounded-sm flex items-center justify-center">
            <span className="text-white text-[9px] font-bold">A</span>
          </div>
          <span className="text-xs font-medium text-violet-600">Resum de la IA</span>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed">{summary}</p>
      </div>
    </div>
  )
}
