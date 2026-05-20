# Suporte de Domingo — Site Institucional

Projeto desenvolvido com **React + Vite + Styled Components** para a UC Programação Front-end.

---

## 🚀 Como rodar o projeto

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar em desenvolvimento
```bash
npm run dev
```

### 3. Build para produção
```bash
npm run build
```

---

## 🗂️ Estrutura de pastas

```
src/
├── components/
│   ├── Header/
│   │   └── Header.jsx          # Nav fixa, glassmorphism, menu mobile
│   ├── Footer/
│   │   └── Footer.jsx          # Footer igual nas duas páginas
│   ├── Hero/
│   │   └── Hero.jsx            # Hero com canvas de partículas
│   ├── Projects/
│   │   └── Projects.jsx        # Carrossel funcional com dots
│   ├── About/
│   │   └── About.jsx           # Seção "Sobre Nós"
│   ├── Services/
│   │   └── Services.jsx        # Grid 3x2 de serviços
│   ├── Contact/
│   │   └── Contact.jsx         # CTA / seção de contato
│   └── Breadcrumb/
│       └── Breadcrumb.jsx      # Breadcrumb para rotas internas
├── pages/
│   ├── Home/
│   │   └── Home.jsx            # Página principal
│   └── Portfolio/
│       └── Portfolio.jsx       # Página de portfólio com grid
├── styles/
│   ├── GlobalStyles.js         # Reset + CSS variables
│   └── theme.js                # Theme tokens para ThemeProvider
├── App.jsx                     # Router + ThemeProvider + Layout
└── main.jsx                    # Entry point
```

---

## ✅ Requisitos técnicos atendidos

| Requisito | Status |
|---|---|
| React + Vite | ✅ |
| React Router (navegação) | ✅ |
| Hooks (useState, useEffect, useRef) | ✅ |
| Styled Components (estilos separados) | ✅ |
| Componentes reutilizáveis | ✅ |
| Breadcrumbs em rotas internas | ✅ (Portfolio) |
| Carrossel funcional | ✅ (com dots + botões) |
| Interface responsiva | ✅ (mobile-first) |
| Header fixo nas duas páginas | ✅ |
| Footer igual nas duas páginas | ✅ |

---

## 🎨 Design System

- **Paleta**: Verde floresta (#37563b, #4f6f52, #acd0ad)
- **Tipografia**: Manrope (400, 600, 700, 800)
- **Background hero**: #0E1510 (dark forest)
- **Animação**: Canvas particle network no hero
- **Glassmorphism**: Header com backdrop-filter blur

---

## 📌 Páginas

- `/` → Home (Hero, Projetos carousel, Sobre Nós, Serviços, Contato)
- `/portfolio` → Portfólio completo (Hero, Grid 2 colunas, 8 projetos)
