'use client'

import {  useTranslations } from 'next-intl'
import { Col, Container, Row } from 'react-bootstrap'
import IndonesiaMap from '../../../assets/images/indonesia-map.png'
import Image from 'next/image'

import axios from 'axios';
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import Area from './Area'
//import IndonesiaJson from '../../../assets/json/indonesia.json'

const Map = dynamic(() => import('./Map'), { ssr: false });

function Operations() {
  const [geojsonData, setGeojsonData] = useState(null);
  const [provinceData, setProvinceData] = useState(null);
  const [areaData, setAreaData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProvinceData = async () => {
      try {
        const urlgeojson = process.env.NEXT_PUBLIC_WEBSITE_BASE_URL + '/indonesia.json'
        const urlarea = process.env.NEXT_PUBLIC_API_URL + '/areas?pagination[limit]=10&sort[1]=ordering:asc&locale=id-ID&populate=*'
        const [response1, response2] = await Promise.all([
          axios.get(urlgeojson),
          axios.get(urlarea),
        ]);

        const dataGeoJson = response1.data;
        const dataArea = response2.data.data;

        const formattedProvinceData = {};
        dataArea.forEach(item => {
          const { title, provinces } = item.attributes;
          provinces.data.forEach(prov => {
            const provinceCode = prov.attributes.code;
            if (!formattedProvinceData[provinceCode]) {
              formattedProvinceData[provinceCode] = {
                provinceName: prov.attributes.name,
                facilities: []
              };
            }
            formattedProvinceData[provinceCode].facilities.push(title);
          });
        });

        let formattedAreaData = {};
        dataArea.forEach(item => {
          const { title, location, total } = item.attributes;
          
          if (!formattedAreaData[item.id]) {
            formattedAreaData[item.id] = {
              title: total + ' ' + title,
              description: location
            }
          }
        });

        setGeojsonData(dataGeoJson);
        setAreaData(formattedAreaData);
        setProvinceData(formattedProvinceData);
      } catch (error) {
        console.error('Error fetching province data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProvinceData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!areaData || areaData.length === 0) {
    return <div>No data found</div>;
  }

  //const t = useTranslations('about-us')
  const title = 'Our Area of Operations'

  return (
    <section
      className='bg-white pt-3 pt-md-5 position-relative'
      id='operations'
    >
      <Container className='py-3 py-md-5'>
        <Row>
          <Col xs={12}>
            <h2 className='fw-bold pb-3 text-center'>{title}</h2>
          </Col>
        </Row>
        {/*
        <Image
          alt='indonesia-map'
          src={IndonesiaMap}
          className='w-100 h-auto d-none d-md-block'
        />
        */}
        <Map geojsonData={geojsonData} provinceData={provinceData} />
        <Area areaData={areaData} />
      </Container>
    </section>
  )
}

export default Operations
