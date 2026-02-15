import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: "Est-ce qu'il faut une application chauffeur ?",
    a: "Non. Le chauffeur reçoit un simple lien web qu'il ouvre dans son navigateur (Chrome, Safari…). Pas d'app à télécharger, pas de compte à créer.",
  },
  {
    q: "Le partage via WhatsApp est-il payant ?",
    a: "Non. Routing utilise le partage natif de WhatsApp (via lien web ou mobile). Il n'y a aucune API payante, aucun surcoût.",
  },
  {
    q: "Peut-on importer depuis Excel ?",
    a: "Oui, via un export CSV depuis Excel. Routing accepte les fichiers CSV avec adresses ou coordonnées GPS.",
  },
  {
    q: "Comment fonctionne la géolocalisation ?",
    a: "Quand le chauffeur ouvre son lien de tournée, il peut partager sa position GPS (avec sa permission). Vous voyez alors sa progression en temps réel sur la carte.",
  },
  {
    q: "Peut-on annuler à tout moment ?",
    a: "Oui. L'abonnement est sans engagement. Vous pouvez annuler depuis votre espace client, et l'accès reste actif jusqu'à la fin du mois payé.",
  },
]

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
        aria-expanded={open}
      >
        <span className="pr-4 text-base font-medium text-gray-900">{faq.q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-gray-600">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Questions fréquentes
          </h2>
        </div>

        <div className="mt-12">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
