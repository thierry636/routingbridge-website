import { Route } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 text-lg font-bold text-gray-900" aria-label="Routing — Accueil">
            <Route className="h-5 w-5 text-primary-600" aria-hidden="true" />
            Routing
          </a>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-500" aria-label="Liens légaux">
            <a href="/privacy" className="transition hover:text-gray-700">Politique de confidentialité</a>
            <a href="/terms" className="transition hover:text-gray-700">CGU</a>
            <a href="mailto:contact@routing.app" className="transition hover:text-gray-700">Contact</a>
          </nav>
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Routing. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
