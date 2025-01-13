import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Certifications from './components/Certifications'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

