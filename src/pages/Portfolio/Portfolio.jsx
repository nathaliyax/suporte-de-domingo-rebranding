import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'


const allProjects = [
  {
    id: 1,
    title: 'Toque Ai',
    tag: 'Web App',
    description: 'Aplicação web inovadora que impulsiona o engajamento por meio de um design de interação fluido e intuitivo.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uj0MHjDA-8v2tLfHRsHbIttw0aj8kTPMEgjP60Jg3DuH3Mo6Od4u-GwvAWCdQhyS-LNGsQQGnhRl-EeAYmXz0hgWsyPLhOWK7Ik7Ft1R5a0uxAYt4Y90ewh12knrLgjkgxF7W7IzIAvJsGnccqCX4F2e0qAWK5VMExbqR_R8Z8y5ZwGlvgFT5hfmDU8pgAl3mp5GG8qs1tOMpZfN4LMtzt-soY9WGS9O0pVbRkl2oPsxC5rnLZwkvbbPEY',
  },
  {
    id: 2,
    title: 'CRJ Soluções',
    tag: 'Corporate',
    description: 'Presença digital corporativa robusta que estabelece autoridade e confiança no mercado.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uipv0f3-ZHkpsopgjqeXxXPWFdjBTfEDZALoyc1AMJwZtTCpfSYVeheWmDZnk3L6Ow_snTEeKzT49jnAgrd7FNH_c-3rbH-pIJTAqA9S8_NisjZsVpGmBXM-g9brEWUx7TQHDadsTInoNgba_KQcx_-oU0NvhTxhw25J2tNTKZcBUvW3On8rsbcveQErUAFfojJqKhvIUX38QL0BYl_qLOZ1Iwo9lEW4kUx-N8VUIoRJVJ9T7oAloNm58k',
  },
  {
    id: 3,
    title: 'Joys Gourmet',
    tag: 'E-commerce',
    description: 'Plataforma e-commerce de alta conversão para entrega de produtos artesanais.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ujgdkmqQzsJJJpq7iq3vSA5IJm73L6bNlL_9hCLW1CBySfWMj_ZawNavtT9sM0rmZLdDa_6QxBmXF89qaCVKIJ7331QDXDSA14r39GztzZa7c-DO0wS0CNkJvXSx9eYc2V305WFeRp-tBJAVlX5nJ2fbhwLvwIKylf4W7HNkEzHAYwh9P7sfplLitBmAaVTCxOVArWLULGM03FpEoRm9mhrJJ2yo9k9fBBVi93_fQmph6-i92yIiKvJ7GE',
  },
  {
    id: 4,
    title: 'Prof. Correa',
    tag: 'Education',
    description: 'Plataforma educacional projetada para facilitar aprendizado remoto e engajamento estudantil.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uhhnN-csqICiYCTQttM6eDMxEn58MtY7ZPVbPFr-rwCm1rq1B_2XsZpurrnxE6FrYc2Plzj0X_CE8jMICaoJ9oD2KFk5nT1C7MUmiqMAP6MC0BKriA1KldOLbghd2FGyxgpQJVlzoNAWRHhZbKXHLC8tXl3E64EFgJaQINas4NVXHc8Z2ElE72ENfYYuwsDJ18ynfNrMTR2cpUchGNwDcx3IhHOe4aR-2KUZ1HqUhomfhcoP07UnNeiskU',
  },
  {
    id: 5,
    title: 'Code Trouble',
    tag: 'Developer Tools',
    description: 'Ferramenta técnica que otimiza processos de workflow para equipes de engenharia de software.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ugj4CdsIj-_nbAnDDLY4n6MikKljFP5KDPbEyaQ7IYs9ses-UR2HYz5DDQg3bMwwxiBnmad0jnPlZrNApZ2dkrv-mjhAp5oQRYGEJI_P1Wk6vvv46RMDrL_aH5zB25DRMTEcfV4_ijGQRmq_HIa4t1o2Gh45Ale-zlAdHBlufQ9BFr61jv1zmccbjJPPvEgw6MntyY7qk7pXhPj2O61FQNb98JwYSt7_pyal9ga4nUkvDuL5Y11IplIgA',
  },
  {
    id: 6,
    title: 'Santé',
    tag: 'Healthcare',
    description: 'Interface moderna para profissionais de saúde com foco em gestão intuitiva de dados de pacientes.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ujjxWbIhJlsFHHxAiS27qpiYKnDqYdBDHNVVFWObzLNfPB6n0s1I0uQODa2i2TRgNMGmVygB7LhuWoehveUTmTxgyJ7CVqxiDjDT7mZDY3cS9RMrw0TdZ5BFDGKD7vovS6-NjA9RV17p0Yfgcx5U_YnfnBziJTL90_oc9ZgPMYQhgNjF34oiausjgSMwgIGF0Z0Kbjij2FUAjdI4SAydxCSvBhJcVLjudpiagXeS37xw5kUqxTXzZmtVvg',
  },
  {
    id: 7,
    title: 'Elevare',
    tag: 'Real Estate',
    description: 'Experiência digital imobiliária com tours virtuais e busca avançada de imóveis.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ujAekmMrD_GjyXrjmIMSLtYn6252LouGzL2Rcjb_mSeKDAF5YnDwGytM1HNb9ETivJjUCaes0FVBkQutgUHW5mMl_Cppmj3fOvl8ytXJ0JNBwLSUXmkjSYjUGgEOuGroRW1cTepX3dtREEQFjaUS_A8teumINCUNt8M1lb3VU8f4KRRltALY1uA3yU9Wx2uA_0fE0pQTNyOOT4yEow8TdJ8vca9Aq1_jc1LbPBw1BrLXncgm-K-xW_aDbs',
  },
  {
    id: 8,
    title: 'Teacher Marcelli',
    tag: 'Personal Brand',
    description: 'Site de marca pessoal e sistema de agendamento para educadores de idiomas independentes.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ujXYozku_agLMYsjGrn4zXDYotuiPA6FfNOM04QILsoi_KxHUhvuRK92BDnUUQUIgnnfJMJlZBeAZ7mbiztOi5LKrfQ5epLy_JOh41awj30QZje87Q-UIGiUAanW0fyjYCwn2YdVanwGuyNXJ_9MaBzfn_AGBSHMFnngmk1Zf-0fCjYKa8RLyyVSQITxFigICp9IsBANPsHANaBgybm0DSTJarvtQ2Yp7UEex6i8BEi-WTo2qQR5L4wWOo',
  },
]

/* ─── Styled Components ─── */

const PageWrapper = styled.div`
  min-height: 100vh;
`

const HeroSection = styled.section`
  position: relative;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--header-height) + 64px) var(--space-gutter) 80px;
  overflow: hidden;
  background: var(--color-hero-bg);
  color: #ffffff;
  border-radius: 0 0 64px 64px;
`

const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.22;
  background: radial-gradient(circle at 30% 50%, #4f6f52 0%, transparent 55%);
`

const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.4;
`

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: var(--container-max);
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
`

const HeroTitle = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(40px, 8vw, 72px);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--color-inverse-primary);
  line-height: 1;
`

const HeroSubtitle = styled.p`
  font-size: clamp(15px, 2vw, 18px);
  color: rgba(255, 255, 255, 0.6);
  max-width: 600px;
  line-height: 1.7;
`

const GridSection = styled.section`
  padding: var(--section-gap) var(--space-gutter);
  max-width: var(--container-max);
  margin: 0 auto;
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ProjectCard = styled.article`
  border-radius: var(--radius-2xl);
  background: var(--color-surface-container-lowest);
  border: 1px solid rgba(194, 200, 191, 0.3);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-base), box-shadow var(--transition-base);

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
  }

  &:hover .proj-img {
    transform: scale(1.05);
  }

  &:hover .proj-arrow {
    color: var(--color-primary);
  }

  &:hover .proj-border {
    border-color: rgba(79, 111, 82, 0.3);
  }
`

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  padding-top: 60%;
  overflow: hidden;
  background: var(--color-surface-container-low);
`

const ProjectImage = styled.img.attrs({ className: 'proj-img' })`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;
`

const HoverOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.5), transparent 60%);
  opacity: 0;
  transition: opacity var(--transition-base);

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`

const CardBody = styled.div`
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
  background: var(--color-surface-container-lowest);
`

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`

const TagBadge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  background: var(--color-secondary-container);
  color: var(--color-on-secondary-container);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  box-shadow: var(--shadow-sm);
`

const ArrowIcon = styled.span.attrs({ className: 'proj-arrow material-symbols-outlined' })`
  font-size: 18px !important;
  color: var(--color-outline);
  transition: color var(--transition-fast);
`

const CardTitle = styled.h2`
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 600;
  color: var(--color-on-surface);
`

const CardDesc = styled.p.attrs({ className: 'proj-border' })`
  font-size: 13px;
  line-height: 1.65;
  color: var(--color-on-surface-variant);
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid rgba(194, 200, 191, 0.2);
  transition: border-color var(--transition-base);
`

/* ─── Particle hook (mini, for hero) ─── */

function useMiniParticles(canvasRef, sectionRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return
    const ctx = canvas.getContext('2d')
    let width, height, particles = [], raf

    function resize() {
      width = canvas.width = section.offsetWidth
      height = canvas.height = section.offsetHeight
    }

    class P {
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4
        this.r = Math.random() * 1.5 + 0.5
      }
      update() {
        this.x += this.vx; this.y += this.vy
        if (this.x < 0 || this.x > width) this.vx *= -1
        if (this.y < 0 || this.y > height) this.vy *= -1
      }
      draw() {
        ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(172,208,173,0.6)'; ctx.fill()
      }
    }

    function init() {
      resize(); particles = []
      const n = Math.floor((width * height) / 14000)
      for (let i = 0; i < n; i++) particles.push(new P())
    }

    function animate() {
      ctx.clearRect(0, 0, width, height)
      particles.forEach((p, i) => {
        p.update(); p.draw()
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x, dy = p.y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 110) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(172,208,173,${0.3 * (1 - d / 110)})`
            ctx.lineWidth = 0.7
            ctx.moveTo(p.x, p.y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke()
          }
        }
      })
      raf = requestAnimationFrame(animate)
    }

    const onResize = () => init()
    window.addEventListener('resize', onResize)
    init(); animate()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [canvasRef, sectionRef])
}

/* ─── Component ─── */

const Portfolio = () => {
  const canvasRef = useRef(null)
  const sectionRef = useRef(null)
  useMiniParticles(canvasRef, sectionRef)

  return (
    <PageWrapper>
      {/* Hero */}
      <HeroSection ref={sectionRef}>
        <GradientOverlay />
        <Canvas ref={canvasRef} />
        <HeroContent>
          <Breadcrumb />
          <HeroTitle>Projetos</HeroTitle>
          <HeroSubtitle>
            Transformaçoes digitais e engenharia criativa.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      {/* Grid */}
      <GridSection>
        <ProjectsGrid>
          {allProjects.map((p) => (
            <ProjectCard key={p.id}>
              <ImageWrap>
                <ProjectImage src={p.image} alt={p.title} loading="lazy" />
                <HoverOverlay />
              </ImageWrap>
              <CardBody>
                <CardTop>
                  <TagBadge>{p.tag}</TagBadge>
                  <ArrowIcon>arrow_outward</ArrowIcon>
                </CardTop>
                <CardTitle>{p.title}</CardTitle>
                <CardDesc>{p.description}</CardDesc>
              </CardBody>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </GridSection>
    </PageWrapper>
  )
}

export default Portfolio
