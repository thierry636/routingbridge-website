import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Globe, ChevronDown } from 'lucide-react'
import { languages } from '../i18n'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const current = languages.find((l) => l.code === i18n.language) || languages[0]

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-2.5 py-1.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span className="hidden sm:inline">{current.label}</span>
        <span className="sm:hidden">{current.code.toUpperCase()}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      {open && (
        <div
          className="absolute right-0 z-50 mt-1 w-44 rounded-lg border border-gray-200 bg-white py-1 shadow-lg"
          role="listbox"
          aria-label="Language"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              role="option"
              aria-selected={lang.code === i18n.language}
              onClick={() => {
                i18n.changeLanguage(lang.code)
                document.documentElement.lang = lang.code
                setOpen(false)
              }}
              className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition hover:bg-gray-50 ${
                lang.code === i18n.language ? 'font-semibold text-primary-600' : 'text-gray-700'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
