import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PackShowcase from './components/PackShowcase'
import SoundCategories from './components/SoundCategories'
import DawCompatibility from './components/DawCompatibility'
import VideoReel from './components/VideoReel'
import Merch from './components/Merch'
import BuySection from './components/BuySection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PackShowcase />
        <SoundCategories />
        <DawCompatibility />
        <VideoReel />
        <Merch />
        <BuySection />
      </main>
      <Footer />
    </>
  )
}
