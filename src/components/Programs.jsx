import AnimateOnScroll from './AnimateOnScroll.jsx'

const PROGRAMS = [
  {
    icon: 'fa-solid fa-child',
    title: 'Training (from 9.00am)',
    description:
      'Training program then school closed every Monday, Wednesday, Saturday and Sunday.',
  },
  {
    icon: 'fa-solid fa-person-running',
    title: 'Training (from 2.00pm)',
    description:
      'When school closed training is on saturday and sunday from 2pm every week',
  },
  // {
  //   icon: 'fa-solid fa-trophy',
  //   title: 'Elite Pro Pathway (Ages 16+)',
  //   description:
  //     'High-performance coaching, strength & conditioning, video breakdown, and scouting showcase opportunities.',
  // },
]

export default function Programs() {
  return (
    <section id="programs" className="programs-section">
      <div className="container">
        <AnimateOnScroll as="h2">Our Training Programs</AnimateOnScroll>
        <div className="program-grid">
          {PROGRAMS.map((program) => (
            <AnimateOnScroll as="div" className="program-card" key={program.title}>
              <div className="program-icon">
                <i className={program.icon}></i>
              </div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <a href="https://omg10.com/4/11198506" className="read-more">
                Learn More <i className="fa-solid fa-arrow-right"></i>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
