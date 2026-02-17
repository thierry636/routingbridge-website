import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Zap, Map, GripVertical, MessageCircle, Clock, FileText } from 'lucide-react'

const icons = [Zap, Map, GripVertical, MessageCircle, Clock, FileText]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
}

export default function Features() {
  const { t } = useTranslation()
  const features = t('features.list', { returnObjects: true })

  return (
    <section id="fonctionnalites" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('features.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
