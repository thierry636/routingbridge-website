import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Connectivity from './components/Connectivity'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Connectivity />
        <Pricing />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
