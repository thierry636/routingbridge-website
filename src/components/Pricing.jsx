import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, CreditCard } from 'lucide-react'

const included = [
  'Optimisation de tournées',
  'Carte interactive (OpenStreetMap)',
  'Partage chauffeur (WhatsApp / lien)',
  'Suivi temps réel',
  'Feuilles de route PDF',
  'Import CSV',
  'Support par email',
]

const PRICE = 14.9

export default function Pricing() {
  const [vehicles, setVehicles] = useState(5)
  const total = (vehicles * PRICE).toFixed(2).replace('.', ',')

  return (
    <section id="tarifs" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Un tarif simple, tout inclus
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Pas de frais cachés, pas d'engagement. Payez uniquement pour vos véhicules actifs.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mx-auto mt-14 max-w-md"
        >
          <div className="rounded-2xl border-2 border-primary-600 bg-white p-8 shadow-lg">
            <div className="text-center">
              <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700">
                Recommandé
              </span>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Pro</h3>
              <div className="mt-4">
                <span className="text-5xl font-extrabold text-gray-900">14,90&nbsp;€</span>
                <span className="text-gray-500"> / véhicule / mois</span>
              </div>
            </div>

            {/* Calculator */}
            <div className="mt-8 rounded-xl bg-gray-50 p-4">
              <label htmlFor="vehicle-slider" className="block text-sm font-medium text-gray-700">
                Nombre de véhicules : <span className="font-bold text-primary-600">{vehicles}</span>
              </label>
              <input
                id="vehicle-slider"
                type="range"
                min={1}
                max={50}
                value={vehicles}
                onChange={(e) => setVehicles(Number(e.target.value))}
                className="mt-2 w-full accent-primary-600"
              />
              <div className="mt-2 flex items-baseline justify-between text-sm">
                <span className="text-gray-500">1</span>
                <span className="text-lg font-bold text-gray-900">{total}&nbsp;€<span className="text-sm font-normal text-gray-500"> / mois</span></span>
                <span className="text-gray-500">50</span>
              </div>
            </div>

            {/* Features */}
            <ul className="mt-6 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="/app/signup"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Démarrer l'essai
            </a>

            <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-500">
              <CreditCard className="h-3.5 w-3.5" aria-hidden="true" />
              Paiement sécurisé via Stripe
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
