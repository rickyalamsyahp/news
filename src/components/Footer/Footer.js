import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import LogoSTP from '../../assets/images/stp-logo-colored.png'

function Footer() {
  const t = useTranslations('footer')
  const linkProduct = [
    {
      header: t('products'),
      child: [
        {
          title: t('aquafeed'),
          link: '/aquafeed',
        },
        { title: t('hatchery'), link: '/hatchery-farm' },
        { title: t('grow-out'), link: '/technical-team' },
        { title: t('seafood-processing'), link: '#' },
      ],
    },
    {
      header: t('about-us'),
      child: [
        { title: t('story'), link: '#' },
        { title: t('vision-mission'), link: '#' },
        { title: t('operations'), link: '#' },
        { title: t('certification'), link: '#' },
      ],
    },
    {
      header: t('commitment'),
      child: [
        { title: t('act-sustainability'), link: '#' },
        { title: t('news'), link: '#' },
      ],
    },
    {
      header: t('contact-us'),
      child: [
        { title: t('contact-us'), link: '#' },
        { title: 'Instagram', link: '#' },
      ],
    },
    {
      header: t('innovation'),
      child: [
        { title: 'JAPFA Aquaculture Research Station (JARS)', link: '#' },
        { title: 'Aquaculture Technology Development (ATD)', link: '#' },
        { title: 'Aquaculture Research Center (ARC)', link: '#' },
      ],
    },
  ]
  return (
    <footer>
      <section className='py-5'>
        <Container>
          <Row>
            <Col sm={12} md className='pb-3 pb-md-0'>
              <Image
                src={LogoSTP}
                alt='logo-stp-aquaculture'
                className='w-50 h-auto img-footer'
              />
            </Col>
            {linkProduct.map((data, index) => (
              <Col key={`footer-header-${index}`} xs={6} md='auto'>
                <h6 className='fw-bold mb-3 mb-sm-4'>{data.header}</h6>
                <ul className='list-unstyled d-flex flex-column gap-2 gap-sm-3 mb-5 mb-md-0'>
                  {data.child.map((child, idx) => (
                    <li key={`footer-child-${idx}`}>
                      <h6 className='text-secondary'>
                        <a href={child.link}>{child.title}</a>
                      </h6>
                    </li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className='copyright'>
        <h6 className='text-secondary'>
          STP Japfa Aquaculture © Copyright 2024. All rights Reserved.
        </h6>
      </section>
    </footer>
  )
}

export default Footer
