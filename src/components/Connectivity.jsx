import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MessageCircle, Link2, MapPin, Shield } from 'lucide-react'

const itemsMeta = [
  { icon: MessageCircle, color: 'bg-green-100 text-green-600' },
  { icon: Link2, color: 'bg-primary-100 text-primary-600' },
  { icon: MapPin, color: 'bg-amber-100 text-amber-600' },
  { icon: Shield, color: 'bg-purple-100 text-purple-600' },
]

export default function Connectivity() {
  const { t } = useTranslation()
  const items = t('connectivity.items', { returnObjects: true })

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('connectivity.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            {t('connectivity.subtitle')}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => {
            const meta = itemsMeta[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex gap-4 rounded-2xl border border-gray-100 bg-gray-50/50 p-6"
              >
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${meta.color}`}>
                  <meta.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
