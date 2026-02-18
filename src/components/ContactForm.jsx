import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new URLSearchParams(new FormData(form))

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data.toString(),
    })
      .then((res) => {
        if (res.ok) {
          setSubmitted(true)
          setError(false)
        } else {
          setError(true)
        }
      })
      .catch(() => setError(true))
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            {t('contact.subtitle')}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mx-auto mt-14 max-w-lg"
        >
          {submitted ? (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
              <CheckCircle className="mx-auto h-10 w-10 text-green-600" aria-hidden="true" />
              <p className="mt-4 text-lg font-semibold text-green-800">
                {t('contact.success')}
              </p>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  <input name="bot-field" />
                </label>
              </p>

              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">
                  {t('contact.name')}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 shadow-sm transition focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">
                  {t('contact.email')}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 shadow-sm transition focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">
                  {t('contact.message')}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 shadow-sm transition focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none resize-none"
                />
              </div>

              {error && (
                <p className="text-sm text-red-600">{t('contact.error')}</p>
              )}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                {t('contact.submit')}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
