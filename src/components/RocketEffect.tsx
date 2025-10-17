import { useState, useEffect, useRef } from 'react'

interface RocketEffectProps {
  children: React.ReactNode
  className?: string
  effectType?: 'rocket' | 'sparkle' | 'pulse' | 'glow'
}

export default function RocketEffect({ 
  children, 
  className = '', 
  effectType = 'rocket' 
}: RocketEffectProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [particles, setParticles] = useState<Array<{
    id: number
    x: number
    y: number
    vx: number
    vy: number
    life: number
    maxLife: number
  }>>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const particleIdRef = useRef(0)

  useEffect(() => {
    if (!isHovered) return

    const createParticles = () => {
      const newParticles = []
      const particleCount = effectType === 'rocket' ? 8 : 12

      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount
        const speed = effectType === 'rocket' ? 2 + Math.random() * 3 : 1 + Math.random() * 2
        
        newParticles.push({
          id: particleIdRef.current++,
          x: 0,
          y: 0,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: 30 + Math.random() * 20
        })
      }
      return newParticles
    }

    setParticles(createParticles())
  }, [isHovered, effectType])

  useEffect(() => {
    if (particles.length === 0) return

    const animate = () => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            life: particle.life + 1,
            vx: particle.vx * 0.98,
            vy: particle.vy * 0.98
          }))
          .filter(particle => particle.life < particle.maxLife)
      )
    }

    const interval = setInterval(animate, 16)
    return () => clearInterval(interval)
  }, [particles.length])

  const getParticleColor = () => {
    switch (effectType) {
      case 'rocket': return '#0ea5e9'
      case 'sparkle': return '#a855f7'
      case 'pulse': return '#10b981'
      case 'glow': return '#f59e0b'
      default: return '#0ea5e9'
    }
  }

  const getParticleSize = () => {
    switch (effectType) {
      case 'rocket': return '2px'
      case 'sparkle': return '1px'
      case 'pulse': return '3px'
      case 'glow': return '4px'
      default: return '2px'
    }
  }

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      
      {/* Efecto de partículas */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map(particle => (
            <div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                left: `50%`,
                top: `50%`,
                transform: `translate(${particle.x}px, ${particle.y}px)`,
                width: getParticleSize(),
                height: getParticleSize(),
                backgroundColor: getParticleColor(),
                opacity: 1 - (particle.life / particle.maxLife),
                boxShadow: `0 0 ${particle.life * 2}px ${getParticleColor()}, 0 0 ${particle.life * 4}px ${getParticleColor()}40`,
                animation: 'pulse 0.5s ease-in-out infinite alternate'
              }}
            />
          ))}
        </div>
      )}

      {/* Efecto de cohete */}
      {isHovered && effectType === 'rocket' && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 pointer-events-none z-50">
          <div className="text-4xl animate-bounce" style={{ animationDuration: '1s' }}>🚀</div>
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-gradient-to-b from-orange-400 to-red-500 rounded-full animate-pulse"></div>
        </div>
      )}

      {/* Efecto de brillo */}
      {isHovered && effectType === 'sparkle' && (
        <div className="absolute inset-0 pointer-events-none z-50">
          <div className="absolute top-2 right-2 text-2xl animate-spin" style={{ animationDuration: '2s' }}>✨</div>
          <div className="absolute bottom-2 left-2 text-xl animate-pulse">⭐</div>
          <div className="absolute top-1/2 left-2 text-lg animate-bounce" style={{ animationDelay: '0.5s' }}>💫</div>
          <div className="absolute top-1/4 right-1/4 text-lg animate-ping">🌟</div>
          <div className="absolute bottom-1/4 right-2 text-base animate-pulse" style={{ animationDelay: '1s' }}>✨</div>
        </div>
      )}

      {/* Efecto de pulso */}
      {isHovered && effectType === 'pulse' && (
        <div className="absolute inset-0 pointer-events-none z-50">
          <div className="absolute inset-0 rounded-full border-4 border-green-400 animate-ping" style={{ animationDuration: '1s' }}></div>
          <div className="absolute inset-0 rounded-full border-2 border-green-300 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute inset-0 rounded-full border border-green-200 animate-ping" style={{ animationDelay: '0.4s' }}></div>
        </div>
      )}

      {/* Efecto de resplandor */}
      {isHovered && effectType === 'glow' && (
        <div className="absolute inset-0 pointer-events-none z-50">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/30 to-orange-400/30 animate-pulse" style={{ animationDuration: '0.8s' }}></div>
          <div className="absolute inset-0 rounded-lg border-2 border-yellow-400/70 animate-ping" style={{ animationDuration: '1.2s' }}></div>
          <div className="absolute inset-0 rounded-lg border border-orange-400/50 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
        </div>
      )}
    </div>
  )
}
