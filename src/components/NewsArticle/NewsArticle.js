'use client'; // Pastikan ini ada agar bisa menggunakan useState dan useEffect

import dynamic from 'next/dynamic';
import React, { useEffect, useState, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Breadcrumbs from '../GeneralComponent/Breadcrumbs/Breadcrumbs';
import LogoSTP from '../../assets/images/berita.jpeg';
import Twitter from '../../assets/svg/twitter.svg';
import Whatsapp from '../../assets/svg/whatsapp.svg';
import Links from '../../assets/svg/link.svg';
import Facebook from '../../assets/svg/facebook.svg';
import Mail from '../../assets/svg/mail.svg';
import { Link } from '../../navigation';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import './style.scss'; // Pastikan di-import
import { articleSlug, articlesCat } from './dummj';

const Image = dynamic(() => import('next/image'), { ssr: false });

function NewsArticle() {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  // Intersection Observer untuk efek scroll animasi
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('Element masuk viewport:', entry.isIntersecting); // Debug
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
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
        <h2 className={`fw-bold py-3 text-primary fade-in ${isVisible ? 'show' : ''}`}>
          {articleSlug.attributes.title}
        </h2>
        <h6 className="text-muted text-end">{articleSlug.attributes.category} • {articleSlug.attributes.published_date}</h6>
        <Image
          alt="news-image"
          src={LogoSTP}
          className={`news-main-image rounded-4 shadow-sm fade-in ${isVisible ? 'show' : ''}`}
          width={800}
          height={500}
        />

        <div ref={contentRef} className={`content-box p-4 rounded-4 shadow-sm mt-4 fade-in ${isVisible ? 'show' : ''}`}>
          <h5 className="content" dangerouslySetInnerHTML={{ __html: contentHtml }} />
          <Link href={`/news/${articleSlug.attributes.slug}`} className="btn btn-primary mt-3">
            Baca Selengkapnya
          </Link>
        </div>

        <div className="image-gallery d-flex gap-3 py-3 flex-wrap">
          {articleSlug.attributes?.images?.map((data, index) => (
            <Image key={index} src={LogoSTP} className="rounded-4 shadow-sm fade-in show" width={200} height={200} />
          ))}
        </div>

        <h6 className="share-article d-flex align-items-center gap-2 mt-3">
          Share Article: <Links /> <Twitter /> <Mail /> <Facebook /> <Whatsapp />
        </h6>
      </Container>

      <Container className="related-articles py-5">
        <h2 className="fw-bold text-center text-secondary fade-in show">Related Articles</h2>
        <Row className="gy-4 mt-4">
          {articlesCat.map((data, index) => (
            <Col xs={12} md={6} key={index}>
              <Link href={`/news/${data.attributes.slug}`} className="text-decoration-none">
                <div className="article-card p-3 rounded-4 shadow-sm d-flex gap-3 align-items-center fade-in show">
                  <Image alt={data.attributes.title} src={LogoSTP} width={150} height={150} className="rounded-3"/>
                  <div>
                    <h6 className="text-muted">{data.attributes.category}</h6>
                    <h4 className="fw-bold text-dark">{data.attributes.title}</h4>
                    <h6 className="text-muted">{data.attributes.published_date}</h6>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default NewsArticle;
