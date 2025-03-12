'use client';

import Breadcrumbs from '@/components/GeneralComponent/Breadcrumbs/Breadcrumbs';
import dynamic from 'next/dynamic';
import React, { useEffect, useState, useRef } from 'react';
import { Col, Container, Row, Carousel } from 'react-bootstrap';

const Image = dynamic(() => import('next/image'), { ssr: false });

function Profile() {
    const dataBreadCrumb = [
        { text: 'Home', href: '/', active: false },
        { text: 'Profile', href: '#', active: false },
    ];

    return (
        <section className="news-article-section">
            <Container className="py-5">
                <Breadcrumbs data={dataBreadCrumb} />
                
                <h1>Profil Wakil Gubernur Jawa Barat</h1>
                <p>
                    Wakil Gubernur Jawa Barat memulai karirnya sebagai seorang birokrat muda yang aktif di berbagai sektor
                    pemerintahan. Sejak awal, ia menunjukkan dedikasi dalam melayani masyarakat dan berkontribusi pada pembangunan
                    daerah.
                </p>
                <p>
                    Karirnya di pemerintahan dimulai sebagai staf di salah satu instansi pemerintah, sebelum akhirnya menjabat sebagai
                    kepala dinas di beberapa sektor strategis. Keberhasilannya dalam mengelola program pembangunan dan kebijakan publik
                    membawanya ke posisi yang lebih tinggi dalam pemerintahan daerah.
                </p>
                <p>
                    Dengan pengalaman panjang dan dedikasi tinggi, ia dipercaya menjadi Wakil Gubernur Jawa Barat. Sejak menjabat,
                    ia aktif mengawal berbagai kebijakan strategis untuk meningkatkan kesejahteraan masyarakat, termasuk dalam bidang
                    pendidikan, kesehatan, dan infrastruktur.
                </p>
                <p>
                    Salah satu pencapaian terbesarnya adalah penguatan koordinasi antar-instansi di Gedung Sate, pusat pemerintahan Jawa
                    Barat. Di sini, ia terus mengawasi implementasi kebijakan dan memastikan program-program pemerintah berjalan dengan baik.
                </p>
                <h2>Galeri Kegiatan</h2>
                <Carousel>
                    <Carousel.Item>
                        <Image src="/images/giat1.jpg" alt="Kegiatan Wakil Gubernur 1" width={800} height={500} />
                        <Carousel.Caption>
                            <p>Wakil Gubernur menghadiri acara sosialisasi kebijakan daerah.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="/images/giat2.jpg" alt="Kegiatan Wakil Gubernur 2" width={800} height={500} />
                        <Carousel.Caption>
                            <p>Kunjungan kerja ke daerah untuk meninjau proyek infrastruktur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="/images/giat3.jpg" alt="Kegiatan Wakil Gubernur 3" width={800} height={500} />
                        <Carousel.Caption>
                            <p>Bertemu dengan masyarakat untuk mendengar aspirasi mereka.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    );
}

export default Profile;