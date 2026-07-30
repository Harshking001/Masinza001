import AnimateOnScroll from './AnimateOnScroll.jsx'

const STATS = [
  { value: '95+', label: 'Active Players' },
  { value: '6+', label: 'Pro Coaches' },
  { value: '28', label: 'Regional Trophies' },
  { value: '100%', label: 'Dedication' },
]

export default function StatsBar() {
  return (
    <AnimateOnScroll as="section" className="stats-bar">
      <div className="container stats-grid">
        {STATS.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </AnimateOnScroll>
  )
}
