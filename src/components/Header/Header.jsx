import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled, { css } from 'styled-components'


const NavWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 16px var(--space-4);
  transition: padding var(--transition-base);
`

const NavInner = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  max-width: var(--container-max);
  margin: 0 auto;
  border-radius: var(--radius-full);
  background: rgba(14, 21, 16, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(172, 208, 173, 0.15);
  transition: background var(--transition-base), box-shadow var(--transition-base);

  ${({ $scrolled }) => $scrolled && css`
    background: rgba(14, 21, 16, 0.92);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  `}
`

const LogoArea = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`

const LogoImg = styled.img`
  height: 36px;
  width: auto;
  object-fit: contain;
`

const DesktopLinks = styled.div`
  display: none;
  align-items: center;
  gap: 36px;

  @media (min-width: 768px) {
    display: flex;
  }
`

const NavLink = styled(Link)`
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ $active }) => ($active ? '#ffffff' : 'rgba(255,255,255,0.55)')};
  border-bottom: 2px solid ${({ $active }) => ($active ? 'rgba(172,208,173,0.8)' : 'transparent')};
  padding-bottom: 2px;
  transition: color var(--transition-fast), border-color var(--transition-fast);

  &:hover {
    color: #ffffff;
    border-bottom-color: rgba(172, 208, 173, 0.5);
  }
`

const RightArea = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const ContactBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: rgba(79, 111, 82, 0.8);
  backdrop-filter: blur(8px);
  color: #ffffff;
  border-radius: var(--radius-lg);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: 1px solid rgba(172, 208, 173, 0.2);
  transition: background var(--transition-fast), transform var(--transition-fast);
  white-space: nowrap;

  &:hover {
    background: var(--color-primary);
    transform: scale(0.97);
  }
  &:active {
    transform: scale(0.93);
  }
`

const WhatsAppIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
)

const MobileMenuBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  padding: 6px;

  @media (min-width: 768px) {
    display: none;
  }

  .material-symbols-outlined {
    font-size: 24px;
  }
`

const MobileMenu = styled.div`
  position: fixed;
  inset: 0;
  z-index: 99;
  background: rgba(14, 21, 16, 0.97);
  backdrop-filter: blur(24px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;
  transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(-100%)')};
  opacity: ${({ $open }) => ($open ? '1' : '0')};
  pointer-events: ${({ $open }) => ($open ? 'all' : 'none')};
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
`

const MobileNavLink = styled(Link)`
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 700;
  color: ${({ $active }) => ($active ? 'var(--color-inverse-primary)' : 'rgba(255,255,255,0.7)')};
  letter-spacing: -0.01em;
  transition: color var(--transition-fast);

  &:hover {
    color: #ffffff;
  }
`

const MobileCloseBtn = styled.button`
  position: absolute;
  top: 28px;
  right: 28px;
  color: rgba(255,255,255,0.7);
  padding: 8px;

  .material-symbols-outlined {
    font-size: 28px;
  }
`


const Header = () => {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMenu = () => setMobileOpen(false)

  return (
    <>
      <NavWrapper>
        <NavInner $scrolled={scrolled}>
          <LogoArea to="/" onClick={closeMenu}>
            <LogoImg
              src="https://lh3.googleusercontent.com/aida/ADBb0ujnWHf_hvFauyyxfHIroP-G0d5QlZa_0BQXkjSedlBRW3_rrpuhi5vU7iCPY7pTb7r0WoeogjhNma950dQ9AVWJaxL_VmcbuuXpcd84xjW6SqmesBuIH1LKwT4ok8gqXtxRexAo6aEcNUTBMzZgqP_6XghkPJOW2m7plnLo1MWgtCtb5lqQiBlDvMsfF8fCsYVuFv_LbykJRc3q-mLslBCK3JPnQ1vuvl_pVbY1-j63fNZzA0HJh0Ii8K0"
              alt="Suporte de Domingo"
            />
          </LogoArea>

          <DesktopLinks>
            <NavLink to="/" $active={pathname === '/'}>Home</NavLink>
            <NavLink to="/portfolio" $active={pathname === '/portfolio'}>Portfólio</NavLink>
          </DesktopLinks>

          <RightArea>
          <ContactBtn
            href="https://api.whatsapp.com/send/?phone=5511967611652&text=contact.whatsappMessage&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contato
            <WhatsAppIcon />
          </ContactBtn>
            <MobileMenuBtn onClick={() => setMobileOpen(true)} aria-label="Abrir menu">
              <span className="material-symbols-outlined">menu</span>
            </MobileMenuBtn>
          </RightArea>
        </NavInner>
      </NavWrapper>

      {/* Mobile overlay menu */}
      <MobileMenu $open={mobileOpen}>
        <MobileCloseBtn onClick={closeMenu} aria-label="Fechar menu">
          <span className="material-symbols-outlined">close</span>
        </MobileCloseBtn>
        <MobileNavLink to="/" $active={pathname === '/'} onClick={closeMenu}>Home</MobileNavLink>
        <MobileNavLink to="/portfolio" $active={pathname === '/portfolio'} onClick={closeMenu}>Portfólio</MobileNavLink>
        <ContactBtn
          href="https://api.whatsapp.com/send/?phone=5511967611652&text=contact.whatsappMessage&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          style={{ fontSize: '16px', padding: '14px 32px' }}
        >
          Contato
          <WhatsAppIcon />
        </ContactBtn>
      </MobileMenu>
    </>
  )
}

export default Header
