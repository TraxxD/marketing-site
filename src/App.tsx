import Nav from './components/Nav'
import Hero from './components/Hero'
import ValueProp from './components/ValueProp'
import Services from './components/Services'
import SocialProof from './components/SocialProof'
import About from './components/About'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ValueProp />
        <Services />
        <SocialProof />
        <About />
        <FAQ />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
