'use client'

import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Container, Row, Col } from 'react-bootstrap';
import Breadcrumbs from '../GeneralComponent/Breadcrumbs/Breadcrumbs';
import { articleSlug, articlesCat } from './dummj';
import { motion } from 'framer-motion';
import './style.scss';

const Image = dynamic(() => import('next/image'), { ssr: false });

export default function NewsDetail() {
  const params = useParams();
  
  const slug = params?.id;

  // Cari artikel berdasarkan slug, jika tidak ada gunakan data dummy (articleSlug)
  const article = articlesCat.find((a) => a.attributes.slug === slug) || articleSlug;
  const dataBreadCrumb = [
    { text: 'Home', href: '/', active: false },
    { text: 'News & Article', href: '/news', active: false },
    { text: article.attributes.title, href: '#', active: true },
  ];

  return (
    <motion.section 
      className='news-detail'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container className='py-5'>
        <Breadcrumbs data={dataBreadCrumb} />
        <motion.h2 
          className='fw-bold py-3 text-primary'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {article.attributes.title}
        </motion.h2>
        <h6 className='text-muted text-end'>{article.attributes.category} • {article.attributes.published_date}</h6>
        <div className='news-image-wrapper my-4'>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              alt='news-image'
              src={article.attributes.image?.data?.attributes?.url || ''}
              className='news-main-image rounded-4 shadow-lg'
              width={20000}
              height={500}
            />
          </motion.div>
        </div>
        <motion.div 
          className='content-box p-4 rounded-4 shadow-sm bg-light'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='content' dangerouslySetInnerHTML={{ __html: article?.attributes?.content_md }} />
        </motion.div>

        {article.attributes.images?.length > 0 && (
          <Row className='image-gallery mt-4 g-3'>
            {article.attributes.images.map((img, index) => (
              <Col xs={12} md={6} lg={4} key={index}>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={img.image.data.attributes.url}
                    className='rounded-4 shadow-sm gallery-image'
                    width={400}
                    height={300}
                    alt={`Gallery image ${index + 1}`}
                  />
                </motion.div>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </motion.section>
  );
}
