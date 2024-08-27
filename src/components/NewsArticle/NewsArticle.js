import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Breadcrumbs from '../GeneralComponent/Breadcrumbs/Breadcrumbs'
import Image from 'next/image'
import Carousel1 from '../../assets/images/carousel-1.png'
import Twitter from '../../assets/svg/twitter.svg'
import Whatsapp from '../../assets/svg/whatsapp.svg'
import Links from '../../assets/svg/link.svg'
import Facebook from '../../assets/svg/facebook.svg'
import Mail from '../../assets/svg/mail.svg'
import { Link } from '../../navigation'

function NewsArticle({articleSlug, articlesCat}) {
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
      text: articleSlug.attributes.title,
      href: '#',
      active: true,
    },
  ]

  const textStyles = (item) => {
    let content = item.text || '\u00A0'
    if (item.bold) content = <b>{content}</b>
    if (item.italic) content = <i>{content}</i>
    if (item.underline) content = <u>{content}</u>

    return content;
  }

  return (
    <section>
      <Container className='py-5'>
        <Breadcrumbs data={dataBreadCrumb} />
        <h2 className='fw-bold py-3 py-md-5'>
          {articleSlug.attributes.title}
        </h2>
        <h6 className='text-end pb-3 pb-md-5'>
          {articleSlug.attributes.category} &#8226; {articleSlug.attributes.published_date}
        </h6>
        <Image
          alt='news-image'
          src={Carousel1}
          className='w-100 h-auto rounded-4'
        />
        <div className='p-5'>
          <h5>
            {articleSlug.attributes?.content_rich && articleSlug.attributes.content_rich.length > 0 ? (
              articleSlug.attributes.content_rich.map((data, index) => {
                const renderContent = () => {
                  switch (data.type) {
                    case 'paragraph':
                      return data.children.map((item, itemIndex) => (
                        <span key={`paragraph-${itemIndex}`}>
                          {textStyles(item)}
                        </span>
                      ))

                    case 'heading':
                      return React.createElement(
                        `h${data.level || 1}`,
                        { key: `heading-${index}` },
                        data.children.map((item, itemIndex) => (
                          <span key={`heading-${itemIndex}`}>
                            {textStyles(item)}
                          </span>
                        ))
                      )

                      case 'list':
                        return React.createElement(
                          data.format == 'ordered' ? 'ol' : 'ul',
                          null,
                          data.children.map((item) =>
                            React.createElement(
                              `li`,
                              null,
                              item.children.map((subitem, subitemIndex) => (
                                <span key={`paragraph-${subitemIndex}`}>
                                  {textStyles(subitem)}
                                </span>
                              ))
                            )
                          )
                        )

                    default:
                      return null;
                  }

                }

                return (
                  <div key={`content-${index}`} style={{ marginBottom: '20px !important' }}>
                  {renderContent()}
                  </div>
                )
              })
            ): null}
          </h5>
          
          <div className='d-flex flex-row gap-3 py-3'>
            {articleSlug.attributes?.images && articleSlug.attributes.images.length > 0 ? (
              articleSlug.attributes.images.map((data) => (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_HOST_IMAGE}${data.image.data.attributes.url}`}
                    className='w-50 h-auto rounded-4'
                    width={500}
                    height={500}
                  />
              ))
            ): null}
          </div>

          <h6 className='justify-content-end d-flex flex-row gap-3'>
            Share Article: <Links /> <Twitter /> <Mail /> <Facebook />{' '}
            <Whatsapp />
          </h6>
        </div>
        <h2 className='fw-bold py-3 py-md-5'>{articleSlug.attributes.category} </h2>
        <Row className='gy-3 gy-md-0'>
        {articlesCat.map((data) => (
          <Col xs={12} md={6} className='mb-5 pb-5 border-2 border-bottom'>
            <Link 
              href={`/news/${data.attributes.slug}`}
            >
              <div className='d-flex align-items-center gap-3'>
                <Image
                  alt='card-{data.attributes.category}'
                  src={Carousel1}
                  width={200}
                  height={200}
                  objectFit='cover'
                />
                <div className='d-flex flex-column gap-3'>
                  <h6 className='text-secondary'>{data.attributes.category}</h6>
                  <h4 className='fw-bold'>
                    {data.attributes.title}
                  </h4>
                  <h6 className='text-secondary'>{data.attributes.published_date}</h6>
                </div>
              </div>
            </Link>
          </Col>
        ))}
        </Row>
        
      </Container>
    </section>
  )
}

export default NewsArticle
