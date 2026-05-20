import React from 'react'
import styled from 'styled-components'


const ContactSection = styled.section`
  padding: var(--section-gap) var(--space-gutter);
  background: rgba(79, 111, 82, 0.07);
  position: relative;
  overflow: hidden;
`

const Blob1 = styled.div`
  position: absolute;
  right: -80px;
  top: -80px;
  width: 380px;
  height: 380px;
  background: var(--color-primary-container);
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;
  pointer-events: none;
`

const Blob2 = styled.div`
  position: absolute;
  left: -80px;
  bottom: -80px;
  width: 380px;
  height: 380px;
  background: var(--color-tertiary-container);
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;
  pointer-events: none;
`

const ContactInner = styled.div`
  max-width: var(--container-max);
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`

const Eyebrow = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-primary);
`

const Title = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  color: var(--color-on-surface);
  max-width: 600px;
  line-height: 1.15;
  letter-spacing: -0.01em;
`

const Subtitle = styled.p`
  font-size: 16px;
  color: var(--color-on-surface-variant);
  max-width: 480px;
  line-height: 1.65;
`

const WhatsAppBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 36px;
  background: var(--color-primary-container);
  color: #ffffff;
  border-radius: var(--radius-lg);
  font-size: 16px;
  font-weight: 600;
  box-shadow: var(--shadow-md);
  transition: background var(--transition-base), transform var(--transition-fast);

  &:hover {
    background: var(--color-primary);
    transform: translateY(-2px);
  }

  svg {
    flex-shrink: 0;
  }
`

const WhatsAppIcon = () => (
  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
)


const Contact = () => (
  <ContactSection id="contato">
    <Blob1 />
    <Blob2 />
    <ContactInner>
      <Eyebrow>Vamos Conversar</Eyebrow>
      <Title>Pronto para transformar seu negócio?</Title>
      <Subtitle>
        Entre em contato e descubra como podemos criar soluções digitais
        que impulsionam resultados reais para você.
      </Subtitle>
      <WhatsAppBtn
        href="https://api.whatsapp.com/send/?phone=5511967611652&text=contact.whatsappMessage&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
        Iniciar Projeto
      </WhatsAppBtn>
    </ContactInner>
  </ContactSection>
)

export default Contact
