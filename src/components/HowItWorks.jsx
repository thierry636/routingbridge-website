import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FileSpreadsheet, MapPinned, Send } from 'lucide-react'

const icons = [FileSpreadsheet, MapPinned, Send]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.45 } }),
}

export default function HowItWorks() {
  const { t } = useTranslation()
  const steps = t('howItWorks.steps', { returnObjects: true })

  return (
    <section id="produit" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('howItWorks.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="relative rounded-2xl border border-gray-100 bg-gray-50/50 p-6 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.desc}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-primary-600">{s.benefit}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
