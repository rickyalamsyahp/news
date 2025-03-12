'use client';

import dynamic from 'next/dynamic';
import React, { useEffect, useState, useRef } from 'react';
import { Col, Container, Row, Carousel } from 'react-bootstrap';
import Breadcrumbs from '../GeneralComponent/Breadcrumbs/Breadcrumbs';
import LogoSTP from '../../assets/images/berita.jpeg';
import Twitter from '../../assets/svg/twitter.svg';
import Whatsapp from '../../assets/svg/whatsapp.svg';
import Links from '../../assets/svg/link.svg';
import Facebook from '../../assets/svg/facebook.svg';
import Mail from '../../assets/svg/mail.svg';
import { Link } from '../../navigation';
import * as matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { motion } from 'framer-motion';
import './style.scss';
import { articleSlug, articlesCat } from './dummj';

const Image = dynamic(() => import('next/image'), { ssr: false });

function NewsArticle() {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  const dataBreadCrumb = [
    { text: 'Home', href: '/', active: false },
    { text: 'News & Article', href: '#', active: false },
  ];

  const matterResult = matter((articleSlug?.attributes?.content_desc ?? '').trim());
  const processedContent = remark().use(html).processSync(matterResult.content);
  const contentHtml = processedContent.toString();

  return (
    <section className="news-article-section">
      <Container className="py-5">
        <Breadcrumbs data={dataBreadCrumb} />

        <Carousel className="mb-5" controls indicators fade interval={3000} prevIcon={<span className="carousel-control-prev-icon" />} nextIcon={<span className="carousel-control-next-icon" />} >
          {articlesCat.slice(0, 10).map((article, index) => (
            <Carousel.Item key={index}>
              <Link href={`/news/${article.attributes.slug}`} className="d-block text-decoration-none">
                <Image alt={article.attributes.title} src={LogoSTP} className="d-block w-50 mx-auto rounded-4 shadow-lg" width={500} height={500} />
                <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
                  <h3>{article.attributes.title}</h3>
                  <p>{article.attributes.category}</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>

        <motion.h2 className="fw-bold py-3 text-primary" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {articleSlug.attributes.title}
        </motion.h2>
        <h6 className="text-muted text-end">{articleSlug.attributes.category} • {articleSlug.attributes.published_date}</h6>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
          <Image alt="news-image" src={LogoSTP} className="news-main-image rounded-4 shadow-lg" width={500} height={300} />
        </motion.div>

        <motion.div ref={contentRef} className="content-box p-4 rounded-4 shadow-sm mt-4 bg-light" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h5 className="content" dangerouslySetInnerHTML={{ __html: contentHtml }} />
          <Link href={`/news/${articleSlug.attributes.slug}`} className="btn btn-primary mt-3">Baca Selengkapnya</Link>
        </motion.div>
      </Container>

      <Container className="related-articles py-5">
        <h2 className="fw-bold text-center text-secondary">Related Articles</h2>
        {['Politics', 'Technology', 'Health', 'Sports', 'Design'].map((category, i) => (
          <div key={i} className="category-section py-4">
            <h3 className="fw-bold text-dark">{category}</h3>
            <Row className="gy-4 mt-3">
              {articlesCat.filter(article => article.attributes.category === category).map((data, index) => (
                <Col xs={12} md={6} key={index}>
                  <Link href={`/news/${data.attributes.slug}`} className="text-decoration-none">
                    <motion.div className="article-card p-3 rounded-4 shadow-sm d-flex gap-3 align-items-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                      <Image alt={data.attributes.title} src={LogoSTP} width={150} height={150} className="rounded-3"/>
                      <div>
                        <h6 className="text-muted">{data.attributes.category}</h6>
                        <h4 className="fw-bold text-dark">{data.attributes.title}</h4>
                        <h6 className="text-muted">{data.attributes.published_date}</h6>
                      </div>
                    </motion.div>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  );
}

export default NewsArticle;
