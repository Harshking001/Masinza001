import { useEffect, useRef, useState } from 'react'

/**
 * Recreates the vanilla `handleScrollScaling()` logic from main.js as a React
 * effect, and adds the new behaviour that was asked for: the text (star icon
 * + heading) sits on a fully transparent background and fades in from
 * invisible to visible as the section is reached, instead of just appearing
 * instantly. The background photo keeps scaling down exactly as before.
 */
export default function ScrollScaleSection() {
  const sectionRef = useRef(null)
  const [scale, setScale] = useState(2.2)
  const [textOpacity, setTextOpacity] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const sectionHeight = section.offsetHeight
      const windowHeight = window.innerHeight

      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const totalScrollableDistance = sectionHeight - windowHeight
        const currentScroll = Math.abs(rect.top)

        let progress = currentScroll / totalScrollableDistance
        progress = Math.min(Math.max(progress, 0), 1)

        // Background image scales down smoothly from 2.2x to 1.0x, same as before
        const maxScale = 2.2
        const minScale = 1.0
        setScale(maxScale - progress * (maxScale - minScale))

        // Text starts fully transparent and eases in to fully visible by
        // the time the user is ~55% of the way through the pinned section
        const opacityProgress = Math.min(progress / 0.55, 1)
        setTextOpacity(opacityProgress)
      } else if (rect.top > 0) {
        // Section hasn't been reached yet - keep text hidden/transparent
        setScale(2.2)
        setTextOpacity(0)
      } else {
        // User has scrolled past the section - keep text fully visible
        setScale(1.0)
        setTextOpacity(1)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="scroll-scale-section" ref={sectionRef}>
      <div className="scroll-sticky-container">
        <div id="scaling-image" className="hero-badge-scale" style={{ transform: `scale(${scale})` }}>
          <div className="hero-badge-scale-text" style={{ opacity: textOpacity }}>
            <i className="fa-solid fa-star star-big"></i>
            <h2>FUTURE LEGENDS OF KENYA</h2>
          </div>
        </div>
      </div>
    </section>
  )
}
