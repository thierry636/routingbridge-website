import { useTranslation } from 'react-i18next'
import { Route } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 text-lg font-bold text-gray-900" aria-label={t('footer.home')}>
            <Route className="h-5 w-5 text-primary-600" aria-hidden="true" />
            RoutingBridge
          </a>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-500" aria-label={t('footer.privacy')}>
            <a href="/privacy" className="transition hover:text-gray-700">{t('footer.privacy')}</a>
            <a href="/terms" className="transition hover:text-gray-700">{t('footer.terms')}</a>
            <a href="#contact" className="transition hover:text-gray-700">{t('footer.contact')}</a>
          </nav>
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  )
}
