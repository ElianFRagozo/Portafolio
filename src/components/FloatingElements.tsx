import { useEffect, useRef } from 'react'

export default function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createFloatingElement = () => {
      const element = document.createElement('div')
      const size = Math.random() * 4 + 2
      const duration = Math.random() * 20 + 10
      const delay = Math.random() * 5

      element.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: linear-gradient(45deg, #0ea5e9, #a855f7);
        border-radius: 50%;
        opacity: ${Math.random() * 0.6 + 0.2};
        pointer-events: none;
        animation: float ${duration}s linear infinite;
        animation-delay: ${delay}s;
        left: ${Math.random() * 100}%;
        top: 100%;
      `

      container.appendChild(element)

      // Remove element after animation
      setTimeout(() => {
        if (element.parentNode) {
          element.parentNode.removeChild(element)
        }
      }, (duration + delay) * 1000)
    }

    // Create floating elements periodically
    const interval = setInterval(createFloatingElement, 3000)

    // Add CSS animation
    const style = document.createElement('style')
    style.textContent = `
      @keyframes float {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(-100vh) rotate(360deg);
          opacity: 0;
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      clearInterval(interval)
      document.head.removeChild(style)
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" />
}
