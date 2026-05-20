import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'


const HeroSection = styled.section`
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding: calc(var(--header-height) + 64px) var(--space-gutter) 80px;
  overflow: hidden;
  background: var(--color-hero-bg);
  color: #ffffff;
`

const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.25;
  background: radial-gradient(circle at 30% 50%, #4f6f52 0%, transparent 55%);
`

const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.45;
`

const HeroInner = styled.div`
  position: relative;
  z-index: 1;
  max-width: var(--container-max);
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 8fr 4fr;
  }
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  text-align: left;
`

const HeroTitle = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(40px, 6vw, 68px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: #ffffff;
  max-width: 680px;

  span {
    color: var(--color-inverse-primary);
  }
`

const HeroSubtitle = styled.p`
  font-size: clamp(16px, 2vw, 20px);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.65);
  max-width: 520px;
`

const HeroCTAs = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
`

const BtnPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: var(--radius-full);
  background: rgba(79, 111, 82, 0.85);
  backdrop-filter: blur(8px);
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.02em;
  border: 1px solid rgba(172, 208, 173, 0.2);
  transition: background var(--transition-base), transform var(--transition-fast);
  box-shadow: 0 4px 20px rgba(79, 111, 82, 0.3);

  &:hover {
    background: rgba(79, 111, 82, 1);
    transform: translateY(-2px);
  }

  .material-symbols-outlined {
    font-size: 18px;
  }
`

const BtnSecondary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.02em;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: background var(--transition-base), transform var(--transition-fast);

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    transform: translateY(-2px);
  }
`

const DiscordIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.033.055a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
)


function useParticleNetwork(canvasRef, sectionRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return

    const ctx = canvas.getContext('2d')
    let width, height, particles = [], raf
    let mouse = { x: null, y: null }

    function resize() {
      width = canvas.width = section.offsetWidth
      height = canvas.height = section.offsetHeight
    }

    const onMouseMove = (e) => {
      const rect = section.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onMouseLeave = () => { mouse.x = null; mouse.y = null }

    section.addEventListener('mousemove', onMouseMove)
    section.addEventListener('mouseleave', onMouseLeave)

    class Particle {
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4
        this.radius = Math.random() * 2 + 0.5
      }
      update() {
        this.x += this.vx; this.y += this.vy
        if (this.x < 0 || this.x > width) this.vx *= -1
        if (this.y < 0 || this.y > height) this.vy *= -1
        if (mouse.x != null) {
          const dx = mouse.x - this.x, dy = mouse.y - this.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 150) { this.x -= dx * 0.012; this.y -= dy * 0.012 }
        }
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(172, 208, 173, 0.65)'
        ctx.fill()
      }
    }

    function init() {
      resize()
      particles = []
      const num = Math.floor((width * height) / 11000)
      for (let i = 0; i < num; i++) particles.push(new Particle())
    }

    function animate() {
      ctx.clearRect(0, 0, width, height)
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(172, 208, 173, ${0.35 * (1 - dist / 120)})`
            ctx.lineWidth = 0.8
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(animate)
    }

    const onResize = () => init()
    window.addEventListener('resize', onResize)
    init()
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      section.removeEventListener('mousemove', onMouseMove)
      section.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [canvasRef, sectionRef])
}


const Hero = () => {
  const canvasRef = useRef(null)
  const sectionRef = useRef(null)
  useParticleNetwork(canvasRef, sectionRef)

  return (
    <HeroSection ref={sectionRef} id="hero">
      <GradientOverlay />
      <Canvas ref={canvasRef} />
      <HeroInner>
        <HeroContent>
          <HeroTitle>
            Empresas sólidas precisam{' '}
            <span>de um sistema escalável</span>
          </HeroTitle>
          <HeroSubtitle>
            Descubra tudo o que podemos oferecer para sua transformação digital,
            e conectar você ao futuro.
          </HeroSubtitle>
          <HeroCTAs>
            <BtnPrimary href="https://www.instagram.com/suportededomingo/" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined">photo_camera</span>
              Instagram
            </BtnPrimary>
            <BtnSecondary href="https://discord.com/invite/qB42JUJquU" target="_blank" rel="noopener noreferrer">
              <DiscordIcon />
              Discord
            </BtnSecondary>
          </HeroCTAs>
        </HeroContent>
      </HeroInner>
    </HeroSection>
  )
}

export default Hero
