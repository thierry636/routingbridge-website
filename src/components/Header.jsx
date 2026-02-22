import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X, Route } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const navLinks = [
    { label: t('header.nav.product'), href: '#produit' },
    { label: t('header.nav.features'), href: '#fonctionnalites' },
    { label: t('header.nav.pricing'), href: '#tarifs' },
    { label: t('header.nav.faq'), href: '#faq' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900" aria-label={t('header.home')}>
          <Route className="h-6 w-6 text-primary-600" aria-hidden="true" />
          RoutingBridge
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label={t('header.mainNav')}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-gray-600 transition hover:text-gray-900">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <a
            href="https://app.routing-bridge.com/register"
            className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            {t('header.signup')}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? t('header.menuClose') : t('header.menuOpen')}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden" aria-label={t('header.mobileNav')}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-3 text-sm font-medium text-gray-700 transition hover:text-primary-600"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <LanguageSwitcher />
            <a href="https://app.routing-bridge.com/register" className="rounded-lg bg-primary-600 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-primary-700">
              {t('header.signup')}
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
