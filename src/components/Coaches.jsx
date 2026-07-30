import AnimateOnScroll from './AnimateOnScroll.jsx'

const COACHES = [
  {
    icon: 'fa-solid fa-user-ninja',
    name: 'Coach Alex Vance',
    role: 'Head Technical Director',
    bio: '12+ years of professional youth development and tactical training experience.',
  },
  {
    icon: 'fa-solid fa-user-shield',
    name: 'Coach Marcus Silva',
    role: 'Conditioning & Tactics',
    bio: 'Former professional player specializing in endurance, agility, and match strategy.',
  },
  {
    icon: 'fa-solid fa-hands-holding',
    name: 'Coach Sarah Jenkins',
    role: 'Goalkeeping Specialist',
    bio: 'Dedicated to reflex optimization, positioning, and mental agility for goalies.',
  },
]

export default function Coaches() {
  return (
    <section id="coaches" className="coaches-section">
      <div className="container">
        <AnimateOnScroll as="h2">Meet Our Coaches</AnimateOnScroll>
        <div className="coaches-grid">
          {COACHES.map((coach) => (
            <AnimateOnScroll as="div" className="coach-card" key={coach.name}>
              <div className="coach-avatar">
                <i className={coach.icon}></i>
              </div>
              <h3>{coach.name}</h3>
              <span className="coach-role">{coach.role}</span>
              <p>{coach.bio}</p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
