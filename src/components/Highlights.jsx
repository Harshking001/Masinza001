import AnimateOnScroll from './AnimateOnScroll.jsx'

const VIDEOS = [
  {
    poster: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
    src: '/assets/videos/highlight1.mp4',
    title: 'Matchday Goals',
    description: 'Under-16 regional tournament top goal highlights in Nairobi.',
  },
  {
    poster: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800',
    src: '/assets/videos/highlight2.mp4',
    title: 'Agility & Speed Drills',
    description: 'Weekly physical conditioning and ladder footwork drills.',
  },
  {
    poster: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=800',
    src: '/assets/videos/highlight3.mp4',
    title: 'Tactical Playbook',
    description: 'Positioning and quick passing sequences on the pitch.',
  },
  {
    poster: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800',
    src: '/assets/videos/highlight4.mp4',
    title: 'Goalkeeping Clinic',
    description: 'Reflex mastery and shot-stopping techniques in training.',
  },
]

export default function Highlights() {
  return (
    <section id="highlights" className="highlights-section">
      <div className="container">
        <AnimateOnScroll as="h2">Academy Highlights</AnimateOnScroll>
        <div className="highlights-grid-2x2">
          {VIDEOS.map((video) => (
            <AnimateOnScroll as="div" className="highlight-card" key={video.title}>
              <div className="video-container">
                <video controls poster={video.poster}>
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="highlight-info">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
