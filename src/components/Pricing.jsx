import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Check, CreditCard } from 'lucide-react'
import { PRICING_TIERS, getUnitPrice, formatCurrency } from '../config'

export default function Pricing() {
  const { t, i18n } = useTranslation()
  const [trucks, setTrucks] = useState(5)
  const included = t('pricing.included', { returnObjects: true })

  const unitPrice = getUnitPrice(trucks)
  const total = formatCurrency(trucks * unitPrice, i18n.language)
  const unitFormatted = formatCurrency(unitPrice, i18n.language)

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
          className="mx-auto mt-14 max-w-lg"
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

            {/* Tiers grid */}
            <div className="mt-6 grid grid-cols-5 gap-1.5 text-center text-xs">
              {PRICING_TIERS.map((tier) => {
                const isActive = trucks >= tier.min && trucks <= tier.max
                return (
                  <div
                    key={tier.min}
                    className={`rounded-lg px-1.5 py-2 transition-colors ${
                      isActive
                        ? 'bg-primary-600 text-white shadow-md ring-2 ring-primary-300'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <div className="font-bold leading-tight">
                      {formatCurrency(tier.price, i18n.language)}
                    </div>
                    <div className={`mt-0.5 leading-tight ${isActive ? 'text-primary-100' : 'text-gray-400'}`}>
                      {tier.max === 200 ? `${tier.min}+` : `${tier.min}–${tier.max}`}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Calculator */}
            <div className="mt-6 rounded-xl bg-gray-50 p-4">
              <label htmlFor="vehicle-slider" className="block text-sm font-medium text-gray-700">
                {t('pricing.truckCount')} : <span className="font-bold text-primary-600">{trucks}</span>
              </label>
              <input
                id="vehicle-slider"
                type="range"
                min={1}
                max={200}
                value={trucks}
                onChange={(e) => setTrucks(Number(e.target.value))}
                className="mt-2 w-full accent-primary-600"
              />
              <div className="mt-1 flex items-baseline justify-between text-sm">
                <span className="text-gray-500">1</span>
                <div className="text-center">
                  <span className="text-lg font-bold text-gray-900">{total}</span>
                  <span className="text-sm font-normal text-gray-500"> {t('pricing.perMonth')}</span>
                  <div className="text-xs text-gray-400">
                    {unitFormatted} {t('pricing.perTruck')}
                  </div>
                </div>
                <span className="text-gray-500">200</span>
              </div>
            </div>

            {/* Micro-lines */}
            <p className="mt-4 text-center text-xs text-gray-500">
              {t('pricing.tieredNote')}
            </p>
            <p className="mt-1 text-center text-xs text-gray-500">
              {t('pricing.noCommitment')}
            </p>

            {/* Features */}
            <ul className="mt-6 space-y-3">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA — register */}
            <a
              href="#contact"
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
