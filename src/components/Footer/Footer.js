import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import LogoSTP from '../../assets/images/stp-logo-colored.png'
import { Link } from '../../navigation'

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
        { title: t('hatchery'), link: '/hatchery-farm#hatchery' },
        { title: t('grow-out'), link: '/hatchery-farm#farm' },
        { title: t('seafood-processing'), link: '/seafood-processing' },
        { title: t('animal-health'), link: '/technical-team#animal-health' },
        {
          title: t('technical-team'),
          link: '/technical-team#shrimp-fish-tech',
        },
      ],
    },
    {
      header: t('about-us'),
      child: [
        { title: t('story'), link: '/about-us#introduction' },
        { title: t('vision-mission'), link: '/about-us#vision-mission' },
        { title: t('operations'), link: '/about-us#operations' },
        { title: t('certification'), link: '/about-us#certifications' },
      ],
    },
    {
      header: t('commitment'),
      child: [{ title: t('act-sustainability'), link: '/commitments' }],
    },
    {
      header: t('innovation'),
      child: [
        {
          title: 'JAPFA Aquaculture Research Station (JARS)',
          link: '/innovation#jars',
        },
        {
          title: 'Aquaculture Technology Development (ATD)',
          link: '/innovation#atd',
        },
        { title: 'Aquaculture Research Center (ARC)', link: '/innovation#arc' },
      ],
    },
    {
      header: t('contact-us'),
      child: [
        { title: t('contact-us'), link: '/contact-us' },
        {
          title: 'Instagram',
          link: 'https://www.instagram.com/suritanipemuka/',
        },
      ],
    },
  ]
  return (
    <footer>
      <section className='py-5'>
        {/* <Container>
          <Row>
            <Col sm={12} md className='pb-3 pb-md-0'>
            <Link href='/'>
              <Image
                src={LogoSTP}
                alt='logo-stp-aquaculture'
                className='w-50 h-auto img-footer'
              />
              </Link>
            </Col>
            {linkProduct.map((data, index) => (
              <Col
                key={`footer-header-${index}`}
                xs={6}
                md={index === 1 ? 'auto' : 2}
              >
                <h6 className='fw-bold mb-3 mb-sm-4'>{data.header}</h6>
                <ul className='list-unstyled d-flex flex-column gap-2 gap-sm-3 mb-5 mb-md-0'>
                  {data.child.map((child, idx) => (
                    <li key={`footer-child-${idx}`}>
                      <h6 className='text-secondary'>
                        <Link href={child.link}>{child.title}</Link>
                      </h6>
                    </li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
        </Container> */}
      </section>
      <section className='copyright'>
        <h6 className='text-secondary'>
         Click.org © Copyright 2025. All rights Reserved.
        </h6>
      </section>
    </footer>
  )
}

export default Footer
