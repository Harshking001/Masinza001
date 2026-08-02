import AnimateOnScroll from './AnimateOnScroll.jsx'

const COACHES = [
  {
    icon: "fa-solid fa-user-tie",
    name: 'Coach Starcus Matiku',
    role: 'Head Coach',
    bio: 'A passionate football coach dedicated to developing players, promoting teamwork, discipline, and continuous improvement both on and off the field.',
  },
  {
    icon: "fa-solid fa-chalkboard-user",
    name: 'Coach Francine Odoi',
    role: 'Team Manager',
    bio: 'An organized and dedicated team manager responsible for supporting players and coaches, coordinating team operations, and ensuring everything runs smoothly on and off the field.',
  },
  {
    icon: "fa-solid fa-futbol",
    name: 'Coach Njinu',
    role: 'u13',
    bio: 'Committed to nurturing young talent by building strong football fundamentals, confidence, teamwork, and a love for the game.',
  },
  {
    icon: "fa-solid fa-child-reaching",
    name: 'Coach Sam',
    role: 'u09',
    bio: 'Focused on introducing young players to football through fun, skill development, discipline, and positive sportsmanship.',
  },
  {
    icon:  "fa-solid fa-user",
    name: 'Coach Zacky',
    role: 'u11',
    bio: 'Dedicated to helping young athletes develop their technical skills, teamwork, and confidence while enjoying the game.',
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
