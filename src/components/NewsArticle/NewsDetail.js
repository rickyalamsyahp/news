'use client'

import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Container, Row, Col } from 'react-bootstrap';
import Breadcrumbs from '../GeneralComponent/Breadcrumbs/Breadcrumbs';
import { articleSlug, articlesCat } from './dummj';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import './style.scss';

const Image = dynamic(() => import('next/image'), { ssr: false });

export default function NewsDetail() {
  const params = useParams();
  const slug = params?.slug;

  // Cari artikel berdasarkan slug, jika tidak ada gunakan data dummy (articleSlug)
  const article = articlesCat.find((a) => a.attributes.slug === slug) || articleSlug;
  const dataBreadCrumb = [
    { text: 'Home', href: '/', active: false },
    { text: 'News & Article', href: '/news', active: false },
    { text: article.attributes.title, href: '#', active: true },
  ];

  return (
    <section className='news-detail'>
      <Container className='py-5'>
        <Breadcrumbs data={dataBreadCrumb} />
        <h2 className='fw-bold py-3 text-primary'>{article.attributes.title}</h2>
        <h6 className='text-muted text-end'>{article.attributes.category} • {article.attributes.published_date}</h6>
        <div className='news-image-wrapper my-4'>
          <Image
            alt='news-image'
            src={article.attributes.image?.data?.attributes?.url || ''}
            className='news-main-image rounded-4 shadow-lg'
            width={800}
            height={500}
          />
        </div>
        <div className='content-box p-4 rounded-4 shadow-sm bg-light'>
        <div className='content' dangerouslySetInnerHTML={{ __html: article?.attributes?.content_md }} />
        </div>

        {article.attributes.images?.length > 0 && (
          <Row className='image-gallery mt-4 g-3'>
            {article.attributes.images.map((img, index) => (
              <Col xs={12} md={6} lg={4} key={index}>
                <Image
                  src={img.image.data.attributes.url}
                  className='rounded-4 shadow-sm gallery-image'
                  width={400}
                  height={300}
                  alt={`Gallery image ${index + 1}`}
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
}