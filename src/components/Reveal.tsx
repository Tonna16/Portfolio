import { useEffect, useRef, useState, type ReactNode } from 'react'
import { classNames } from '../utils/classNames'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [canAnimate, setCanAnimate] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setCanAnimate(false)
      setIsVisible(true)
      return
    }

    setCanAnimate(true)
    setIsVisible(false)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.16 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={classNames(
        'reveal',
        canAnimate && 'reveal-ready',
        isVisible && 'is-visible',
        className,
      )}
      ref={ref}
      style={canAnimate ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
