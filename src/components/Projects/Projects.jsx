import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const projects = [
  {
    id: 1,
    title: 'Toque Ai',
    tag: 'Web App',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ugZ4Eei4pS3TW3EXpe1xRsd2qi502u5RaLlCjQ4JYVg8V6-N8Z8irg-HYSxXJgbs75hUJoJq_gX4OUfEUqYiNTE4DbVxXC5xK0a0fDRVpqRCfjfgVCJR02SG0qVP3a8b2qz78t_Fo9DaO8PGHb72aBRqwVIleimsVjPYVrsDi617Aq2iwWNiVQTRuCNDiVqhseXe4VaTbwaxTnZCp7CuJIKcPVb42U6ZEJWzAKGBYVVS5xGcd38vJ78D3g',
  },
  {
    id: 2,
    title: 'CRJ Soluções',
    tag: 'Corporate',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uitwrHKfk1g46371kAitQF38TQqgILwk_gX2zs-eWaCAsNOa4Rou5_0vYhkrkf_7qMyeguPBOFfE2PLSubmF9T9vGJeCvNaZ8DACCTsAD5hbdxfNyZsicdkARVl2ZynNWd_ogenUl92BUaCjqWVcVXRBPXQT2GYp1g4ZyAxXnKApb_R5NtI7HvP4JDefZm3gnZhUy3L5AkaA3d7isqiF4Iri8qLjOhxaw3YKvtmOB0Xd0FvPkw-WMNHUTU',
  },
  {
    id: 3,
    title: 'Joys Gourmet',
    tag: 'E-commerce',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ujgdkmqQzsJJJpq7iq3vSA5IJm73L6bNlL_9hCLW1CBySfWMj_ZawNavtT9sM0rmZLdDa_6QxBmXF89qaCVKIJ7331QDXDSA14r39GztzZa7c-DO0wS0CNkJvXSx9eYc2V305WFeRp-tBJAVlX5nJ2fbhwLvwIKylf4W7HNkEzHAYwh9P7sfplLitBmAaVTCxOVArWLULGM03FpEoRm9mhrJJ2yo9k9fBBVi93_fQmph6-i92yIiKvJ7GE',
  },
  {
    id: 4,
    title: 'Prof. Correa',
    tag: 'Education',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uhhnN-csqICiYCTQttM6eDMxEn58MtY7ZPVbPFr-rwCm1rq1B_2XsZpurrnxE6FrYc2Plzj0X_CE8jMICaoJ9oD2KFk5nT1C7MUmiqMAP6MC0BKriA1KldOLbghd2FGyxgpQJVlzoNAWRHhZbKXHLC8tXl3E64EFgJaQINas4NVXHc8Z2ElE72ENfYYuwsDJ18ynfNrMTR2cpUchGNwDcx3IhHOe4aR-2KUZ1HqUhomfhcoP07UnNeiskU',
  },
  {
    id: 5,
    title: 'Code Trouble',
    tag: 'Developer Tools',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ugj4CdsIj-_nbAnDDLY4n6MikKljFP5KDPbEyaQ7IYs9ses-UR2HYz5DDQg3bMwwxiBnmad0jnPlZrNApZ2dkrv-mjhAp5oQRYGEJI_P1Wk6vvv46RMDrL_aH5zB25DRMTEcfV4_ijGQRmq_HIa4t1o2Gh45Ale-zlAdHBlufQ9BFr61jv1zmccbjJPPvEgw6MntyY7qk7pXhPj2O61FQNb98JwYSt7_pyal9ga4nUkvDuL5Y11IplIgA',
  },
  {
    id: 6,
    title: 'Santé',
    tag: 'Healthcare',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ujjxWbIhJlsFHHxAiS27qpiYKnDqYdBDHNVVFWObzLNfPB6n0s1I0uQODa2i2TRgNMGmVygB7LhuWoehveUTmTxgyJ7CVqxiDjDT7mZDY3cS9RMrw0TdZ5BFDGKD7vovS6-NjA9RV17p0Yfgcx5U_YnfnBziJTL90_oc9ZgPMYQhgNjF34oiausjgSMwgIGF0Z0Kbjij2FUAjdI4SAydxCSvBhJcVLjudpiagXeS37xw5kUqxTXzZmtVvg',
  },
]


const Section = styled.section`
  padding: var(--section-gap) 0;
  background: var(--color-surface-container);
  overflow: hidden;
`

const SectionInner = styled.div`
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--space-gutter);
`

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 48px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`

const SectionMeta = styled.div`
  max-width: 520px;
`

const SectionEyebrow = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 8px;
`

const SectionTitle = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 600;
  color: var(--color-on-surface);
  margin-bottom: 12px;
`

const SectionSubtitle = styled.p`
  font-size: 16px;
  color: var(--color-on-surface-variant);
  line-height: 1.6;
`

const ViewAllLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-primary-container);
  border-bottom: 1px solid transparent;
  padding-bottom: 2px;
  white-space: nowrap;
  transition: border-color var(--transition-fast);

  &:hover {
    border-bottom-color: var(--color-primary-container);
  }

  .material-symbols-outlined {
    font-size: 16px;
  }
`

const CarouselContainer = styled.div`
  position: relative;
`

const Track = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding-bottom: 12px;

  &::-webkit-scrollbar { display: none; }
  -ms-overflow-style: none;
  scrollbar-width: none;
`

const Card = styled.article`
  flex-shrink: 0;
  width: calc(33.33% - 16px);
  min-width: 280px;
  scroll-snap-align: start;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  border: 1px solid rgba(194, 200, 191, 0.3);
  background: #ffffff;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  position: relative;
  height: 240px;

  &:hover img {
    transform: scale(1.06);
  }
  &:hover .card-overlay {
    opacity: 1;
  }
`

const CardImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.7s ease;
  display: block;
`

const CardOverlay = styled.div.attrs({ className: 'card-overlay' })`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%);
  opacity: 0;
  transition: opacity var(--transition-base);
`

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 60%, transparent 100%);
`

const CardTag = styled.span`
  display: inline-block;
  padding: 4px 12px;
  background: var(--color-primary-container);
  color: #ffffff;
  border-radius: var(--radius-full);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  margin-bottom: 8px;
  box-shadow: var(--shadow-sm);
`

const CardTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 600;
  color: #ffffff;
`

const CarouselControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
`

const CarouselBtn = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(194, 200, 191, 0.4);
  color: var(--color-on-surface);
  box-shadow: var(--shadow-sm);
  transition: background var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);

  &:hover {
    background: var(--color-primary-container);
    color: #ffffff;
    border-color: transparent;
  }

  &:active {
    transform: scale(0.9);
  }

  .material-symbols-outlined {
    font-size: 22px;
  }
`

const Dots = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`

const Dot = styled.button`
  width: ${({ $active }) => ($active ? '20px' : '7px')};
  height: 7px;
  border-radius: var(--radius-full);
  background: ${({ $active }) => ($active ? 'var(--color-primary-container)' : 'var(--color-outline-variant)')};
  transition: width var(--transition-base), background var(--transition-base);
`

const VISIBLE = 3
const DOT_COUNT = projects.length - VISIBLE + 1 // = 4

const Projects = () => {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const getCardWidth = () => {
    const track = trackRef.current
    if (!track) return 0
    const card = track.querySelector('article')
    return card ? card.offsetWidth + 24 : 340
  }

  const scroll = (dir) => {
    if (!trackRef.current) return
    trackRef.current.scrollBy({ left: dir * getCardWidth(), behavior: 'smooth' })
  }

  const scrollToIndex = (i) => {
    if (!trackRef.current) return
    trackRef.current.scrollTo({ left: i * getCardWidth(), behavior: 'smooth' })
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const handleScroll = () => {
      const cw = getCardWidth()
      if (!cw) return
      const idx = Math.round(track.scrollLeft / cw)
      setActiveIndex(Math.min(idx, DOT_COUNT - 1))
    }
    track.addEventListener('scroll', handleScroll, { passive: true })
    return () => track.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Section id="portfolio">
      <SectionInner>
        <SectionHeader>
          <SectionMeta>
            <SectionEyebrow>Portfólio</SectionEyebrow>
            <SectionTitle>Projetos</SectionTitle>
            <SectionSubtitle>
              Conheça algumas das soluções que desenvolvemos para impulsionar
              negócios através do design e tecnologia.
            </SectionSubtitle>
          </SectionMeta>
          <ViewAllLink to="/portfolio">
            Ver todos
            <span className="material-symbols-outlined">arrow_outward</span>
          </ViewAllLink>
        </SectionHeader>

        <CarouselContainer>
          <Track ref={trackRef}>
            {projects.map((p) => (
              <Card key={p.id}>
                <CardImage src={p.image} alt={p.title} loading="lazy" />
                <CardOverlay />
                <CardContent>
                  <CardTag>{p.tag}</CardTag>
                  <CardTitle>{p.title}</CardTitle>
                </CardContent>
              </Card>
            ))}
          </Track>
        </CarouselContainer>

        <CarouselControls>
          <CarouselBtn onClick={() => scroll(-1)} aria-label="Anterior">
            <span className="material-symbols-outlined">chevron_left</span>
          </CarouselBtn>
          <Dots>
            {Array.from({ length: DOT_COUNT }).map((_, i) => (
              <Dot
                key={i}
                $active={activeIndex === i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Ir para grupo ${i + 1}`}
              />
            ))}
          </Dots>
          <CarouselBtn onClick={() => scroll(1)} aria-label="Próximo">
            <span className="material-symbols-outlined">chevron_right</span>
          </CarouselBtn>
        </CarouselControls>
      </SectionInner>
    </Section>
  )
}

export default Projects
