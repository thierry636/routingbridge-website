import { motion } from 'framer-motion'
import { ArrowRight, Play, MapPin, Truck, Navigation } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/60 to-white pb-16 pt-12 sm:pb-24 sm:pt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
              14,90&nbsp;€ / véhicule / mois &middot; Annulable à tout moment
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-[3.5rem]">
              Optimisez vos tournées en quelques secondes.
            </h1>

            <p className="mt-5 max-w-lg text-lg leading-relaxed text-gray-600">
              Importez vos ordres, planifiez sur la carte, partagez aux chauffeurs via WhatsApp, suivez en temps réel.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/app/signup"
                className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Démarrer l'essai
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#produit"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                <Play className="h-4 w-4" aria-hidden="true" />
                Voir une démo
              </a>
            </div>
          </motion.div>

          {/* App mockup placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
              {/* Faux map background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-blue-50 to-emerald-50" />

              {/* Grid lines to simulate map */}
              <div className="absolute inset-0 opacity-[0.07]" style={{
                backgroundImage: 'linear-gradient(to right, #2563eb 1px, transparent 1px), linear-gradient(to bottom, #2563eb 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />

              {/* Route line */}
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 300" fill="none">
                <path
                  d="M60 240 C100 200, 120 140, 160 120 S240 60, 280 100 S340 160, 350 80"
                  stroke="#2563eb"
                  strokeWidth="3"
                  strokeDasharray="8 4"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>

              {/* Map pins */}
              <div className="absolute left-[14%] top-[75%] flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg">
                <MapPin className="h-4 w-4" />
              </div>
              <div className="absolute left-[38%] top-[35%] flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg">
                <Navigation className="h-4 w-4" />
              </div>
              <div className="absolute right-[18%] top-[22%] flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-white shadow-lg">
                <Truck className="h-4 w-4" />
              </div>

              {/* Mini sidebar */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-gray-200 bg-white/90 p-3 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-100">
                    <Truck className="h-4 w-4 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-gray-900">Tournée optimisée</div>
                    <div className="text-xs text-gray-500">3 arrêts &middot; 12,4 km &middot; 28 min</div>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">En cours</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
