import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function Hero() {
  useGSAP(() => {
    gsap.from('.hero-btns',{
      y: 100,
      scale: 0.5,
      ease: 'elastic'
    })
  },[])
  return (
    <header id="hero">
      <div className="hero-glow"></div>
      <div className="hero-content fade-in-up">
        <div className="location-badge">
          <i className="fa-solid fa-location-dot"></i>  wendani astro turf ,Nairobi,Kenya 
        </div>
        <h1>Stars Football Academy</h1>
        <p>Building Future Legends On and Off the Pitch</p>
        <div className="hero-btns">
          <a href="#programs" className="btn-primary">
            Explore Programs
          </a>
          <a href="#highlights" className="btn-secondary">
            Watch Highlights
          </a>
        </div>
      </div>
    </header>
  )
}
