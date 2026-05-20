import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'


const BreadcrumbNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 20px;
`

const BreadcrumbLink = styled(Link)`
  color: rgba(255, 255, 255, 0.55);
  font-weight: 500;
  transition: color var(--transition-fast);

  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }
`

const BreadcrumbSeparator = styled.span`
  .material-symbols-outlined {
    font-size: 14px !important;
  }
`

const BreadcrumbCurrent = styled.span`
  color: var(--color-inverse-primary);
  font-weight: 500;
`


const routeMap = {
  '/': 'Home',
  '/portfolio': 'Portfólio',
}


const Breadcrumb = () => {
  const { pathname } = useLocation()
  const pathParts = pathname.split('/').filter(Boolean)

  if (pathParts.length === 0) return null // hide on home

  return (
    <BreadcrumbNav aria-label="Breadcrumb">
      <BreadcrumbLink to="/">Home</BreadcrumbLink>
      {pathParts.map((part, i) => {
        const to = '/' + pathParts.slice(0, i + 1).join('/')
        const label = routeMap[to] || part
        const isLast = i === pathParts.length - 1

        return (
          <React.Fragment key={to}>
            <BreadcrumbSeparator aria-hidden="true">
              <span className="material-symbols-outlined">chevron_right</span>
            </BreadcrumbSeparator>
            {isLast ? (
              <BreadcrumbCurrent aria-current="page">{label}</BreadcrumbCurrent>
            ) : (
              <BreadcrumbLink to={to}>{label}</BreadcrumbLink>
            )}
          </React.Fragment>
        )
      })}
    </BreadcrumbNav>
  )
}

export default Breadcrumb
