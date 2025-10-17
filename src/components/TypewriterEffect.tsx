import { useState, useEffect } from 'react'

interface TypewriterEffectProps {
  text: string
  speed?: number
  delay?: number
  className?: string
}

export default function TypewriterEffect({ 
  text, 
  speed = 100, 
  delay = 0,
  className = '' 
}: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, text, speed])

  useEffect(() => {
    if (delay > 0) {
      const timeout = setTimeout(() => {
        setCurrentIndex(0)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [delay])

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && (
        <span className="animate-pulse text-accent-400">|</span>
      )}
    </span>
  )
}
