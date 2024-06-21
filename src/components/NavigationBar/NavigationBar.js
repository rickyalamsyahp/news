'use client'

import React, { useRef } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap'

import { Link, usePathname } from '../../navigation'

import STPLogo from '../../assets/images/stp-logo.png'
import STPLogoColored from '../../assets/images/stp-logo-colored.png'

import './styles.scss'
import { ButtonPrimary } from '../GeneralComponent/CustomButton/CustomButton'
import LocaleSwitcher from './LocaleSwitcher/LocaleSwitcher'

function NavigationBar() {
  const t = useTranslations('navigation-bar')
  const offCanvasRef = useRef()

  const closeOffCanvas = () => {
    if (offCanvasRef.current.backdrop !== null)
      offCanvasRef.current.backdrop.click()
  }
  const pathname = usePathname()
  const lastSegment = pathname.split('/').pop()
  const navigationMap = [
    {
      href: '/total-solutions',
      className: 'total-solutions',
      text: t('total-solutions'),
    },
    {
      href: '/innovation',
      className: 'innovation',
      text: t('innovation'),
    },
    {
      href: '/commitments',
      className: 'commitments',
      text: t('commitments'),
    },
    {
      href: '/about-us',
      className: 'about-us',
      text: t('about-us'),
    },
  ]
  return (
    <Navbar
      sticky='top'
      className={'navbar-bg'}
      style={{ padding: '16px 0px' }}
      expand={'lg'}
    >
      <Container>
        <Link href='/'>
          <Image priority width={88} src={STPLogo} alt='stp' />
        </Link>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Offcanvas id='responsive-navbar-nav' ref={offCanvasRef}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-`}>
              <Image priority width={80} src={STPLogoColored} alt='stp' />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 gap-3 gap-xl-5'>
              {navigationMap.map((data, index) => (
                <Link
                  className={`nav-link nav-item ${
                    lastSegment === data.className && 'active'
                  }`}
                  href={data.href}
                  onClick={closeOffCanvas}
                  key={`navbar-${index}`}
                >
                  {data.text}
                </Link>
              ))}
              <ButtonPrimary>{t('login')}</ButtonPrimary>
              <LocaleSwitcher />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
