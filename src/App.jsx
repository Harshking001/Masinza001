import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import StatsBar from './components/StatsBar.jsx'
import Programs from './components/Programs.jsx'
import ScrollScaleSection from './components/ScrollScaleSection.jsx'
import Highlights from './components/Highlights.jsx'
import Blog from './components/Blog.jsx'
import Coaches from './components/Coaches.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import View from './components/View.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <View />
      <Programs />
      <ScrollScaleSection />
      <Highlights />
      <Blog />
      <Coaches />
      <Contact />
      <Footer />
    </>
  )
}
