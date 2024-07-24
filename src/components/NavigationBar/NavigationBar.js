'use client'

import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Container, Navbar, Nav } from 'react-bootstrap'

import { Link, usePathname } from '../../navigation'

import STPLogo from '../../assets/images/stp-logo.png'
import STPLogoColored from '../../assets/images/stp-logo-colored.png'

import './styles.scss'
import LocaleSwitcher from './LocaleSwitcher/LocaleSwitcher'

import Hamburger from 'hamburger-react'

function NavigationBar() {
  const t = useTranslations('navigation-bar')
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
  useEffect(() => {
    const handleScroll = () => {
      const specificContainer = document.getElementById('hero-homepage')
      if (specificContainer === null) {
        setIsScrolled(true)
      } else {
        const specificContainerBottom =
          specificContainer.getBoundingClientRect().bottom
        setIsScrolled(specificContainerBottom <= 0)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Navbar
      sticky='top'
      className={`navbar-bg ${isScrolled ? 'navbar-white' : 'navbar-dark'}`}
      style={{ padding: '16px 0px' }}
      expand='lg'
    >
      <Container>
        <Link href='/' className='position-relative'>
          <Image
            priority
            src={STPLogo}
            alt='stp'
            className={`img-logo ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
          />
          <Image
            priority
            src={STPLogoColored}
            alt='stp'
            className={`img-logo position-absolute start-0 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
          />
        </Link>

        <Hamburger
          toggled={open}
          toggle={setOpen}
          color={isScrolled ? 'var(--bs-dark)' : 'white'}
          duration={0.5}
        />
        <Nav
          className={`navbar-responsive ${isScrolled ? 'navbar-responsive-white' : 'navbar-responsive-dark'} collapse-${open}`}
        >
          <Container className='justify-content-end d-flex flex-grow-1 flex-column flex-lg-row gap-3 gap-xl-5 '>
            {navigationMap.map((data, index) => (
              <Link
                className={`nav-link navbar-item ${
                  lastSegment === data.className && 'active'
                }`}
                href={data.href}
                key={`navbar-${index}`}
                onClick={() => setOpen(false)}
              >
                {data.text}
              </Link>
            ))}
            {/* <ButtonPrimary>{t('login')}</ButtonPrimary> */}
            <LocaleSwitcher />
          </Container>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
