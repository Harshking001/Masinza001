const NAV_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#programs', label: 'Programs' },
  { href: '#highlights', label: 'Highlights' },
  { href: '#blog-section', label: 'News' },
  { href: '#coaches', label: 'Coaches' },
]

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <i className="fa-solid fa-star logo-icon"></i>
        <span>STARS ACADEMY</span>
      </div>
      <div className="button-container">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="nav-link">
            {link.label}
          </a>
        ))}
        <a href="#contact" className="nav-link btn-accent">
          Contact
        </a>
      </div>
    </nav>
  )
}
