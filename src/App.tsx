import Nav from './components/Nav'
import Hero from './components/Hero'
import ResultsSnapshot from './components/ResultsSnapshot'
import ClientLogos from './components/ClientLogos'
import ValueProp from './components/ValueProp'
import Services from './components/Services'
import CTABand from './components/CTABand'
import CaseStudies from './components/CaseStudies'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import About from './components/About'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ResultsSnapshot />
        <ClientLogos />
        <ValueProp />
        <Services />
        <CTABand />
        <CaseStudies />
        <Process />
        <Testimonials />
        <About />
        <FAQ />
        <CTABand variant="audit" />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
