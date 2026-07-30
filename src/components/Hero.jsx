export default function Hero() {
  return (
    <header id="hero">
      <div className="hero-glow"></div>
      <div className="hero-content fade-in-up">
        <div className="location-badge">
          <i className="fa-solid fa-location-dot"></i>  Kizito Colledge ,Nairobi,Kenya 
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
