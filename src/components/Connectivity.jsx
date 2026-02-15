import { motion } from 'framer-motion'
import { MessageCircle, Link2, MapPin, Shield } from 'lucide-react'

const items = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    desc: 'Partagez la tournée en 1 clic via WhatsApp Web ou mobile. Gratuit, sans API payante.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Link2,
    title: 'Lien web chauffeur',
    desc: "Le chauffeur ouvre un simple lien dans son navigateur. Pas d'app à installer.",
    color: 'bg-primary-100 text-primary-600',
  },
  {
    icon: MapPin,
    title: 'Géolocalisation live',
    desc: 'Position GPS partagée en temps réel avec permission du chauffeur. Basé sur OpenStreetMap.',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Shield,
    title: 'Sécurité & RGPD',
    desc: "Données hébergées en Europe. Contrôle d'accès par entreprise. Géoloc uniquement avec consentement.",
    color: 'bg-purple-100 text-purple-600',
  },
]

export default function Connectivity() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Connectivité simple, sans friction
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Communiquez avec vos chauffeurs via les outils qu'ils utilisent déjà.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex gap-4 rounded-2xl border border-gray-100 bg-gray-50/50 p-6"
            >
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${item.color}`}>
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
