import { Col, Container, Row } from 'react-bootstrap'
import Breadcrumbs from '../GeneralComponent/Breadcrumbs/Breadcrumbs'
import Image from 'next/image'
import Carousel1 from '../../assets/images/carousel-1.png'
import Twitter from '../../assets/svg/twitter.svg'
import Whatsapp from '../../assets/svg/whatsapp.svg'
import Link from '../../assets/svg/link.svg'
import Facebook from '../../assets/svg/facebook.svg'
import Mail from '../../assets/svg/mail.svg'
function NewsArticle() {
  const dataBreadCrumb = [
    {
      text: 'Home',
      href: '/',
      active: false,
    },
    {
      text: 'News & Article',
      href: '#',
      active: false,
    },
    {
      text: 'Started Feed Production Operations in Sidoarjo',
      href: '#',
      active: true,
    },
  ]
  return (
    <section>
      <Container className='py-5'>
        <Breadcrumbs data={dataBreadCrumb} />
        <h2 className='fw-bold py-3 py-md-5'>
          Started Feed Production Operations in Sidoarjo.
        </h2>
        <h6 className='text-end pb-3 pb-md-5'>
          Sustainability &#8226; Thursday 06 June 2024
        </h6>
        <Image
          alt='news-image'
          src={Carousel1}
          className='w-100 h-auto rounded-4'
        />
        <div className='p-5'>
          <h5>
            Lorem ipsum dolor sit amet consectetur. Pellentesque in sed lobortis
            ac dolor egestas. Pulvinar leo tristique vitae duis et nunc
            facilisis. Dui quam in tempor eu quam ut sed. Nisi nibh orci vitae
            rhoncus mollis. Blandit interdum morbi fames elit nisi lacus ut
            neque. Neque viverra dui diam nulla nulla neque amet eget sed. Sed
            faucibus et ac eu ut quis. Sagittis diam non feugiat id elementum.
            Hac vel aenean ligula faucibus gravida praesent consectetur. Est
            viverra viverra viverra adipiscing sit adipiscing. Vivamus tempor mi
            aliquet porta dignissim amet arcu integer. Volutpat quam leo ac
            tristique. <br /> Lorem ipsum dolor sit amet consectetur.
            Pellentesque in sed lobortis ac dolor egestas. Pulvinar leo
            tristique vitae duis et nunc facilisis. Dui quam in tempor eu quam
            ut sed. Nisi nibh orci vitae rhoncus mollis. Blandit interdum morbi
            fames elit nisi lacus ut neque. Neque viverra dui diam nulla nulla
            neque amet eget sed. Sed faucibus et ac eu ut quis. Sagittis diam
            non feugiat id elementum. Hac vel aenean ligula faucibus gravida
            praesent consectetur. Est viverra viverra viverra adipiscing sit
            adipiscing. Vivamus tempor mi aliquet porta dignissim amet arcu
            integer. Volutpat quam leo ac tristique. <br />
            Lorem ipsum dolor sit amet consectetur. Pellentesque in sed lobortis
            ac dolor egestas. Pulvinar leo tristique vitae duis et nunc
            facilisis. Dui quam in tempor eu quam ut sed. Nisi nibh orci vitae
            rhoncus mollis. Blandit interdum morbi fames elit nisi lacus ut
            neque. Neque viverra dui diam nulla nulla neque amet eget sed. Sed
            faucibus et ac eu ut quis. Sagittis diam non feugiat id elementum.
            Hac vel aenean ligula faucibus gravida praesent consectetur. Est
            viverra viverra viverra adipiscing sit adipiscing. Vivamus tempor mi
            aliquet porta dignissim amet arcu integer. Volutpat quam leo ac
            tristique.
          </h5>
          <div className='d-flex flex-row gap-3 py-3'>
            <Image
              alt='news-image'
              src={Carousel1}
              className='w-50 h-auto rounded-4'
            />
            <Image
              alt='news-image'
              src={Carousel1}
              className='w-50 h-auto rounded-4'
            />
          </div>
          <h6 className='justify-content-end d-flex flex-row gap-3'>
            Share Article: <Link /> <Twitter /> <Mail /> <Facebook />{' '}
            <Whatsapp />
          </h6>
        </div>
        <h2 className='fw-bold py-3 py-md-5'>Sustainability</h2>
        <Row className='border-2 border-bottom pb-5 mb-5 gy-3 gy-md-0'>
          <Col xs={12} md={6}>
            <div className='d-flex align-items-center gap-3'>
              <Image
                alt='card-sustainability'
                src={Carousel1}
                width={200}
                height={200}
                objectFit='cover'
              />
              <div className='d-flex flex-column gap-3'>
                <h6 className='text-secondary'>Category</h6>
                <h4 className='fw-bold'>
                  Title Should be Here, This is The longest Title. It can be
                  three lines
                </h4>
                <h6 className='text-secondary'>16/07/2024</h6>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className='d-flex align-items-center gap-3'>
              <Image
                alt='card-sustainability'
                src={Carousel1}
                width={200}
                height={200}
                objectFit='cover'
              />
              <div className='d-flex flex-column gap-3'>
                <h6 className='text-secondary'>Category</h6>
                <h4 className='fw-bold'>
                  Title Should be Here, This is The longest Title. It can be
                  three lines
                </h4>
                <h6 className='text-secondary'>16/07/2024</h6>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='border-2 border-bottom pb-5 mb-5 gy-3 gy-md-0'>
          <Col xs={12} md={6}>
            <div className='d-flex align-items-center gap-3'>
              <Image
                alt='card-sustainability'
                src={Carousel1}
                width={200}
                height={200}
                objectFit='cover'
              />
              <div className='d-flex flex-column gap-3'>
                <h6 className='text-secondary'>Category</h6>
                <h4 className='fw-bold'>
                  Title Should be Here, This is The longest Title. It can be
                  three lines
                </h4>
                <h6 className='text-secondary'>16/07/2024</h6>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className='d-flex align-items-center gap-3'>
              <Image
                alt='card-sustainability'
                src={Carousel1}
                width={200}
                height={200}
                className='object-fit-cover'
              />
              <div className='d-flex flex-column gap-3'>
                <h6 className='text-secondary'>Category</h6>
                <h4 className='fw-bold'>
                  Title Should be Here, This is The longest Title. It can be
                  three lines
                </h4>
                <h6 className='text-secondary'>16/07/2024</h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default NewsArticle
