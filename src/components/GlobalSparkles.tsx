import React, { useEffect, useRef } from 'react'

interface GlobalSparklesProps {
  count?: number
  colors?: string[]
}

export const GlobalSparkles: React.FC<GlobalSparklesProps> = ({
  count = 147,
  colors = ['#FFD700', '#FFA500', '#FF6B35', '#FF4500', '#DC143C', '#B22222']
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const sparkles: HTMLElement[] = []

    // Create sparkle elements
    for (let i = 0; i < count; i++) {
      const sparkle = document.createElement('div')
      sparkle.className = 'global-sparkle'
      
      // Random position
      sparkle.style.left = Math.random() * 100 + '%'
      sparkle.style.top = Math.random() * 100 + '%'
      
      // Random color from palette
      const color = colors[Math.floor(Math.random() * colors.length)]
      sparkle.style.background = color
      sparkle.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`
      
      // Random animation delay and duration
      sparkle.style.animationDelay = Math.random() * 3 + 's'
      sparkle.style.animationDuration = (Math.random() * 2 + 2) + 's'
      
      containerRef.current.appendChild(sparkle)
      sparkles.push(sparkle)
    }

    // Cleanup function
    return () => {
      sparkles.forEach(sparkle => {
        if (sparkle.parentNode) {
          sparkle.parentNode.removeChild(sparkle)
        }
      })
    }
  }, [count, colors])

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden'
      }}
    />
  )
}

export default GlobalSparkles