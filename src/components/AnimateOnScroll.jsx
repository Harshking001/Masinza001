import { useEffect, useRef, useState } from 'react'

/**
 * Drop-in replacement for the old `.animate-on-scroll` + IntersectionObserver
 * pattern from main.js. Wrap any element/section in this component and it
 * will pick up the `visible` class once it scrolls into view.
 */
export default function AnimateOnScroll({
  as: Tag = 'div',
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`animate-on-scroll${visible ? ' visible' : ''}${className ? ` ${className}` : ''}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
