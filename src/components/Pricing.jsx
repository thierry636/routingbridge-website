import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Check, CreditCard } from 'lucide-react'

const PRICE = 14.9

export default function Pricing() {
  const { t, i18n } = useTranslation()
  const [vehicles, setVehicles] = useState(5)
  const included = t('pricing.included', { returnObjects: true })

  const total = new Intl.NumberFormat(i18n.language, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  }).format(vehicles * PRICE)

  return (
    <section id="tarifs" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('pricing.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            {t('pricing.subtitle')}
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
                {t('pricing.recommended')}
              </span>
              <h3 className="mt-4 text-xl font-bold text-gray-900">{t('pricing.plan')}</h3>
              <div className="mt-4">
                <span className="text-5xl font-extrabold text-gray-900">{t('pricing.price')}</span>
                <span className="text-gray-500"> {t('pricing.perVehicle')}</span>
              </div>
            </div>

            {/* Calculator */}
            <div className="mt-8 rounded-xl bg-gray-50 p-4">
              <label htmlFor="vehicle-slider" className="block text-sm font-medium text-gray-700">
                {t('pricing.vehicleCount')} : <span className="font-bold text-primary-600">{vehicles}</span>
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
                <span className="text-lg font-bold text-gray-900">{total}<span className="text-sm font-normal text-gray-500"> {t('pricing.perMonth')}</span></span>
                <span className="text-gray-500">50</span>
              </div>
            </div>

            {/* Features */}
            <ul className="mt-6 space-y-3">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="/app/signup"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              {t('pricing.cta')}
            </a>

            <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-500">
              <CreditCard className="h-3.5 w-3.5" aria-hidden="true" />
              {t('pricing.securePayment')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
