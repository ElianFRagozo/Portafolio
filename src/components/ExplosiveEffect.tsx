import { useState, useEffect, useRef } from 'react'

interface ExplosiveEffectProps {
  children: React.ReactNode
  className?: string
}

export default function ExplosiveEffect({ 
  children, 
  className = '' 
}: ExplosiveEffectProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [explosions, setExplosions] = useState<Array<{
    id: number
    x: number
    y: number
    life: number
    maxLife: number
  }>>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const explosionIdRef = useRef(0)

  useEffect(() => {
    if (!isHovered) return

    const createExplosion = () => {
      const newExplosions = []
      const explosionCount = 15

      for (let i = 0; i < explosionCount; i++) {
        const angle = (Math.PI * 2 * i) / explosionCount
        const distance = 30 + Math.random() * 40
        const x = Math.cos(angle) * distance
        const y = Math.sin(angle) * distance
        
        newExplosions.push({
          id: explosionIdRef.current++,
          x,
          y,
          life: 0,
          maxLife: 20 + Math.random() * 15
        })
      }
      return newExplosions
    }

    setExplosions(createExplosion())
  }, [isHovered])

  useEffect(() => {
    if (explosions.length === 0) return

    const animate = () => {
      setExplosions(prev => 
        prev
          .map(explosion => ({
            ...explosion,
            life: explosion.life + 1
          }))
          .filter(explosion => explosion.life < explosion.maxLife)
      )
    }

    const interval = setInterval(animate, 16)
    return () => clearInterval(interval)
  }, [explosions.length])

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      
      {/* Efecto de explosión */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
          {explosions.map(explosion => {
            const progress = explosion.life / explosion.maxLife
            const size = (1 - progress) * 8 + 2
            const opacity = 1 - progress
            
            return (
              <div
                key={explosion.id}
                className="absolute rounded-full"
                style={{
                  left: `50%`,
                  top: `50%`,
                  transform: `translate(${explosion.x}px, ${explosion.y}px)`,
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`,
                  opacity,
                  boxShadow: `0 0 ${size * 2}px currentColor`,
                  animation: 'pulse 0.3s ease-in-out infinite alternate'
                }}
              />
            )
          })}
        </div>
      )}

      {/* Efecto de ondas */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none z-40">
          <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping" style={{ animationDuration: '0.8s' }}></div>
          <div className="absolute inset-0 rounded-full border border-blue-300 animate-ping" style={{ animationDelay: '0.2s', animationDuration: '1s' }}></div>
          <div className="absolute inset-0 rounded-full border border-blue-200 animate-ping" style={{ animationDelay: '0.4s', animationDuration: '1.2s' }}></div>
        </div>
      )}

      {/* Efecto de brillo central */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none z-30">
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-blue-400/20 via-blue-300/10 to-transparent animate-pulse"></div>
        </div>
      )}
    </div>
  )
}
