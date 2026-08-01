import AnimateOnScroll from './AnimateOnScroll.jsx'

const POSTS = [
  {
    date: 'July 29, 2026',
    title: 'Summer Training Camp Kickoff',
    excerpt:
      'Our annual summer intensive training camp in Nairobi has officially started. Players are working on agility, ball control, and tactical discipline.',
    imageClass: 'placeholder-img-1',
  },
  {
    date: 'July 20, 2026',
    title: 'Victory in the Regional Cup',
    excerpt:
      'Huge congratulations to our Under-16 squad for securing a brilliant win in the finals over the weekend. Hard work pays off!',
    imageClass: 'placeholder-img-2',
  },
  {
    date: 'July 12, 2026',
    title: 'Nutrition Tips for Young Athletes',
    excerpt:
      'Discover what fuel our young players need before and after matches to maintain high energy levels and rapid recovery.',
    imageClass: 'placeholder-img-3',
  },
]

export default function Blog() {
  return (
    <section id="blog-section" className="blog-section">
      <div className="container">
        <AnimateOnScroll as="h2">Latest Academy News</AnimateOnScroll>
        <div className="blog-grid">
          {POSTS.map((post) => (
            <AnimateOnScroll as="article" className="blog-card" key={post.title}>
              <div className={`blog-image ${post.imageClass}`}></div>
              <div className="blog-content">
                <span className="blog-date">{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href="https://omg10.com/4/11198506" className="read-more">
                  Read More <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
