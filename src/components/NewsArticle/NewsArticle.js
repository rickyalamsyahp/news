import dynamic from 'next/dynamic';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Breadcrumbs from '../GeneralComponent/Breadcrumbs/Breadcrumbs'

import Twitter from '../../assets/svg/twitter.svg'
import Whatsapp from '../../assets/svg/whatsapp.svg'
import Links from '../../assets/svg/link.svg'
import Facebook from '../../assets/svg/facebook.svg'
import Mail from '../../assets/svg/mail.svg'
import { Link } from '../../navigation'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import './style.scss'
const Image = dynamic(() => import('next/image'), { ssr: false });
async function NewsArticle({articleSlug, articlesCat}) {
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
      text: articleSlug.attributes.title ,
      href: '#',
      active: true,
    },
  ]

  const matterResult = matter(articleSlug?.attributes?.content_md!==null?articleSlug?.attributes?.content_md:'')
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent? processedContent.toString() : ''

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
          src={`${process.env.NEXT_PUBLIC_HOST_IMAGE}${articleSlug.attributes.image.data.attributes.url}`}
          className='w-100 h-auto rounded-4'
          width={800}
          height={500}
        />
        <div className='p-5'>
          <h5 className='content' dangerouslySetInnerHTML={{ __html: contentHtml }} />
          
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
        <h2 className='fw-bold py-3 py-md-5'>Other Articles</h2>
        <Row className='gy-3 gy-md-0'>
        {articlesCat.map((data) => (
          <Col xs={12} md={6} className='mb-5 pb-5 border-2 border-bottom'>
            <Link 
              href={`/news/${data.attributes.slug}`}
            >
              <div className='d-flex align-items-center gap-3'>
                <Image
                  alt='card-{data.attributes.category}'
                  src={`${process.env.NEXT_PUBLIC_HOST_IMAGE}${data.attributes.image.data.attributes.url}`}
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
