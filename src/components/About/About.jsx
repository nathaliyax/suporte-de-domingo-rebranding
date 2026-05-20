import React from 'react'
import styled from 'styled-components'


const AboutSection = styled.section`
  padding: 64px var(--space-gutter);
  background: var(--color-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const AboutInner = styled.div`
  max-width: 860px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

const Eyebrow = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-primary);
`

const AboutText = styled.p`
  font-size: clamp(16px, 2vw, 18px);
  line-height: 1.8;
  color: var(--color-on-surface);
`

const Highlight = styled.span`
  color: var(--color-primary-container);
  font-weight: 600;
`

const AboutDivider = styled.div`
  width: 48px;
  height: 3px;
  border-radius: var(--radius-full);
  background: linear-gradient(90deg, var(--color-primary-container), var(--color-inverse-primary));
`

const About = () => (
  <AboutSection id="sobre-nos">
    <AboutInner>
      <Eyebrow>Sobre Nós</Eyebrow>
      <AboutDivider />
      <AboutText>
        A <Highlight>Suporte de Domingo</Highlight> entrega experiências conceituais com design
        autoral, criando identidades únicas que rompem com o genérico. Estruturamos soluções
        completas com código orientado ao futuro — impulsionando conversões, reduzindo custos
        operacionais e proporcionando uma <Highlight>experiência de usuário memorável &amp; acessível</Highlight>.
      </AboutText>
    </AboutInner>
  </AboutSection>
)

export default About
