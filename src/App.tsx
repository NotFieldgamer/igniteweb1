import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      
      <main className="main-content">
        <div className="container">
          {/* Additional content sections will be added here */}
          <About />
          
          <Skills />
          
          <Portfolio />
          
          <Services />
          
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
