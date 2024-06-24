'use client'

import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Container, Navbar, Nav } from 'react-bootstrap'

import { Link, usePathname } from '../../navigation'

import STPLogo from '../../assets/images/stp-logo.png'

import './styles.scss'
import { ButtonPrimary } from '../GeneralComponent/CustomButton/CustomButton'
import LocaleSwitcher from './LocaleSwitcher/LocaleSwitcher'

import Hamburger from 'hamburger-react'

function NavigationBar() {
  const t = useTranslations('navigation-bar')
  const [open, setOpen] = useState(false)
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
      expand='lg'
    >
      <Container>
        <Link href='/'>
          <Image priority src={STPLogo} alt='stp' />
        </Link>

        <Hamburger
          toggled={open}
          toggle={setOpen}
          color='white'
          duration={0.5}
        />
        <Nav className={`navbar-responsive collapse-${open}`}>
          <Container className='justify-content-end d-flex flex-grow-1 flex-column flex-lg-row gap-3 gap-xl-5 '>
            {navigationMap.map((data, index) => (
              <Link
                className={`nav-link text-light nav-item ${
                  lastSegment === data.className && 'active'
                }`}
                href={data.href}
                key={`navbar-${index}`}
              >
                {data.text}
              </Link>
            ))}
            <ButtonPrimary>{t('login')}</ButtonPrimary>
            <LocaleSwitcher />
          </Container>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
