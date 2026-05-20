import React from 'react'
import styled from 'styled-components'


const services = [
  {
    icon: 'grid_view',
    title: 'UI / UX Design para Produtos Digitais',
    description:
      'Transformamos ideias em interfaces intuitivas, responsivas e com foco na experiência do usuário, projetadas para escalar globalmente.',
  },
  {
    icon: 'present_to_all',
    title: 'Mídias Sociais — Design de Apresentações',
    description:
      'Criamos conteúdos para redes sociais, apresentações profissionais e materiais promocionais. Sempre com clareza, estética e consistência visual.',
  },
  {
    icon: 'contrast',
    title: 'Branding & Identidade Visual ◐',
    description:
      'Construímos marcas com personalidade. Do logotipo à paleta de cores, criamos identidades que conectam, comunicam e fortalecem o seu posicionamento.',
  },
  {
    icon: 'ads_click',
    title: 'Marketing Estratégico e Tráfego Pago ⟷',
    description:
      'Campanhas inteligentes e segmentadas com foco em resultados reais. Estratégia, criatividade e performance para seu negócio crescer com propósito.',
  },
  {
    icon: 'terminal',
    title: 'Desenvolvimento de Software ⌘',
    description:
      'Aplicações web e mobile sob medida, com Clean Architecture, testes automatizados e escalabilidade integrada desde o início.',
  },
  {
    icon: 'groups_3',
    title: 'Consultoria & Capacitação',
    description:
      'Diagnóstico de processos, automações e treinamentos práticos para sua equipe evoluir com estratégia e eficiência.',
  },
]


const ServicesSection = styled.section`
  padding: var(--section-gap) var(--space-gutter);
  background: var(--color-surface-container-low);
`

const ServicesInner = styled.div`
  max-width: var(--container-max);
  margin: 0 auto;
`

const ServicesHeader = styled.div`
  max-width: 520px;
  margin-bottom: 64px;
`

const SectionEyebrow = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 10px;
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
  line-height: 1.65;
  color: var(--color-on-surface-variant);
`

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Card = styled.article`
  background: #ffffff;
  border-radius: var(--radius-2xl);
  padding: 32px;
  border: 1px solid rgba(194, 200, 191, 0.3);
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: var(--shadow-sm);
  transition:
    border-color var(--transition-base),
    box-shadow var(--transition-base),
    transform var(--transition-base);

  &:hover {
    border-color: var(--color-primary-container);
    box-shadow: var(--shadow-md);
    transform: translateY(-4px);
  }

  &:hover .card-icon-wrap {
    background: var(--color-primary-container);
  }

  &:hover .card-icon {
    color: #ffffff;
  }
`

const IconWrap = styled.div.attrs({ className: 'card-icon-wrap' })`
  width: 56px;
  height: 56px;
  border-radius: var(--radius-xl);
  background: var(--color-surface-container);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  transition: background var(--transition-base);
`

const CardIcon = styled.span.attrs({ className: 'card-icon material-symbols-outlined' })`
  font-size: 28px !important;
  color: var(--color-primary-container);
  transition: color var(--transition-base);
`

const CardTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 600;
  color: var(--color-on-surface);
  margin-bottom: 12px;
  line-height: 1.4;
`

const CardDescription = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: var(--color-on-surface-variant);
  flex-grow: 1;
`

const Services = () => (
  <ServicesSection id="servicos">
    <ServicesInner>
      <ServicesHeader>
        <SectionEyebrow>Serviços</SectionEyebrow>
        <SectionTitle>Do branding à experiência digital</SectionTitle>
        <SectionSubtitle>
          Soluções integradas em design, software, automação e capacitação para
          gerar valor e impulsionar resultados.
        </SectionSubtitle>
      </ServicesHeader>

      <CardsGrid>
        {services.map((s) => (
          <Card key={s.title}>
            <IconWrap>
              <CardIcon>{s.icon}</CardIcon>
            </IconWrap>
            <CardTitle>{s.title}</CardTitle>
            <CardDescription>{s.description}</CardDescription>
          </Card>
        ))}
      </CardsGrid>
    </ServicesInner>
  </ServicesSection>
)

export default Services
