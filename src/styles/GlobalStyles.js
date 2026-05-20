import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* ─── CSS Design Tokens ─── */
  :root {
    /* Brand Colors */
    --color-primary: #37563b;
    --color-primary-container: #4f6f52;
    --color-primary-fixed: #c8ecc8;
    --color-primary-fixed-dim: #acd0ad;
    --color-inverse-primary: #acd0ad;

    --color-secondary: #59623e;
    --color-secondary-container: #d8e2b4;
    --color-on-secondary-container: #5c6540;

    --color-tertiary: #45543f;
    --color-tertiary-container: #5d6c56;
    --color-on-tertiary-container: #dbecd1;

    /* Surface */
    --color-surface: #fafaf4;
    --color-surface-dim: #dadad5;
    --color-surface-bright: #fafaf4;
    --color-surface-container-lowest: #ffffff;
    --color-surface-container-low: #f4f4ee;
    --color-surface-container: #eeeee9;
    --color-surface-container-high: #e8e8e3;
    --color-surface-container-highest: #e3e3de;

    /* On colors */
    --color-on-surface: #1a1c19;
    --color-on-surface-variant: #424841;
    --color-on-primary: #ffffff;
    --color-on-primary-container: #ccf0cc;
    --color-on-tertiary: #ffffff;

    /* Outline */
    --color-outline: #737971;
    --color-outline-variant: #c2c8bf;

    /* Error */
    --color-error: #ba1a1a;
    --color-error-container: #ffdad6;
    --color-on-error: #ffffff;

    /* Inverse */
    --color-inverse-surface: #2f312e;
    --color-inverse-on-surface: #f1f1ec;

    /* Hero Dark BG */
    --color-hero-bg: #0E1510;

    /* Typography */
    --font-display: 'Manrope', sans-serif;
    --font-body: 'Manrope', sans-serif;

    /* Spacing */
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-5: 20px;
    --space-6: 24px;
    --space-8: 32px;
    --space-10: 40px;
    --space-12: 48px;
    --space-16: 64px;
    --space-20: 80px;
    --space-gutter: 24px;
    --section-gap: 80px;
    --container-max: 1280px;

    /* Border radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --radius-2xl: 24px;
    --radius-full: 9999px;

    /* Shadows */
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
    --shadow-md: 0 4px 16px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.06);
    --shadow-lg: 0 8px 32px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.08);

    /* Transitions */
    --transition-fast: 150ms ease;
    --transition-base: 300ms ease;
    --transition-slow: 600ms ease;

    /* Header height */
    --header-height: 72px;
  }

  /* ─── Reset & Base ─── */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: var(--font-body);
    background-color: var(--color-surface);
    color: var(--color-on-surface);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    line-height: 1.5;
  }

  img, svg {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  ul, ol {
    list-style: none;
  }

  /* Material Symbols */
  .material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    vertical-align: middle;
    font-size: 20px;
    line-height: 1;
  }

  /* ─── Scrollbar ─── */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: var(--color-surface-container);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--color-outline-variant);
    border-radius: var(--radius-full);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-outline);
  }

  /* ─── No scrollbar utility ─── */
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

  /* ─── Selection ─── */
  ::selection {
    background: var(--color-primary-container);
    color: var(--color-on-primary);
  }
`

export default GlobalStyles
