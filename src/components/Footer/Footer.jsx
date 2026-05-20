import React from 'react'
import styled from 'styled-components'


const FooterWrapper = styled.footer`
  width: 100%;
  background: var(--color-surface-container-high);
  color: var(--color-on-surface);
  padding: 48px 0 0;
`

const FooterInner = styled.div`
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--space-gutter);
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`

const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const LogoImg = styled.img`
  height: 32px;
  width: auto;
  object-fit: contain;
`

const BrandTagline = styled.p`
  font-size: 13px;
  color: var(--color-on-surface-variant);
  max-width: 220px;
  line-height: 1.5;
`

const FooterSocials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const SocialsHeading = styled.h4`
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 600;
  color: var(--color-on-surface);
`

const SocialsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--color-on-surface-variant);
  transition: color var(--transition-fast);

  &:hover {
    color: var(--color-primary-container);
  }

  .material-symbols-outlined {
    font-size: 18px;
    color: var(--color-primary);
  }

  svg {
    color: var(--color-primary);
    flex-shrink: 0;
  }

  &:hover svg {
    color: var(--color-primary-container);
  }

  &:hover .material-symbols-outlined {
    color: var(--color-primary-container);
  }
`

const FooterDivider = styled.div`
  max-width: var(--container-max);
  margin: 32px auto 0;
  padding: 0 var(--space-gutter);
  border-top: 1px solid rgba(194, 200, 191, 0.3);
`

const FooterBottom = styled.div`
  padding: 16px 0;
  text-align: center;
`

const Copyright = styled.p`
  font-size: 13px;
  color: var(--color-on-surface-variant);
  opacity: 0.7;
`

const WhatsAppIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
)


const Footer = () => {
  return (
    <FooterWrapper>
      <FooterInner>
        <FooterBrand>
          <LogoImg
            src="https://lh3.googleusercontent.com/aida/ADBb0ujnWHf_hvFauyyxfHIroP-G0d5QlZa_0BQXkjSedlBRW3_rrpuhi5vU7iCPY7pTb7r0WoeogjhNma950dQ9AVWJaxL_VmcbuuXpcd84xjW6SqmesBuIH1LKwT4ok8gqXtxRexAo6aEcNUTBMzZgqP_6XghkPJOW2m7plnLo1MWgtCtb5lqQiBlDvMsfF8fCsYVuFv_LbykJRc3q-mLslBCK3JPnQ1vuvl_pVbY1-j63fNZzA0HJh0Ii8K0"
            alt="Suporte de Domingo"
          />
          <BrandTagline>Transformação digital para o seu negócio</BrandTagline>
        </FooterBrand>

        <FooterSocials>
          <SocialsHeading>Conecte-se</SocialsHeading>
          <SocialsList>
            <li>
              <SocialLink href="https://www.instagram.com/suportededomingo/" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined">photo_camera</span>
                Instagram
              </SocialLink>
            </li>
            <li>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined">work</span>
                LinkedIn
              </SocialLink>
            </li>
            <li>
              <SocialLink href="https://api.whatsapp.com/send/?phone=5511967611652&text=contact.whatsappMessage&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Contato
              </SocialLink>
            </li>
          </SocialsList>
        </FooterSocials>
      </FooterInner>

      <FooterDivider>
        <FooterBottom>
          <Copyright>Suporte de Domingo - 2025 Todos os direitos reservados.</Copyright>
        </FooterBottom>
      </FooterDivider>
    </FooterWrapper>
  )
}

export default Footer
