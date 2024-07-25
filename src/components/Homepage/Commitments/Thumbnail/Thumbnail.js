import { Col, Row } from 'react-bootstrap'
import Reveal from '../../../Animation/Reveal/Reveal'
export default function Thumbnail() {
  return (
    <Row>
      <Col>
        <Reveal>
          <iframe
            style={{ width: '100%', height: 'auto' }}
            src='https://www.youtube.com/embed/7MyhioD2f8k?si=fO3m5xBHnBrJ3-zr'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </Reveal>
      </Col>
    </Row>
  )
}
