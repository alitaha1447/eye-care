import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import ChildSquint from './pages/ChildSquint'
import AdultSquint from './pages/AdultSquint'
import Techniques from './pages/Techniques'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Faq from './pages/Faq'
import Thanks from './pages/Thanks'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/child-squint" element={<ChildSquint />} />
        <Route path="/adult-squint" element={<AdultSquint />} />
        <Route path="/techniques" element={<Techniques />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<Faq />} /> */}
        <Route path="/thanks" element={<Thanks />} />
        {/* <Route path="/thank-you" element={<Thanks />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}
