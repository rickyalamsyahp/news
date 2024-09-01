import { Col, Row } from 'react-bootstrap'
import Reveal from '../../../Animation/Reveal/Reveal'
import STPVideo from '../../../../../videos/stp-video.mov'
import Video from 'next-video'

export default function Thumbnail({dataVideo}) {    
  return (
    <Row>
      <Col>
        <Reveal>
          <iframe
            style={{ width: '100%', height: 'auto' }}
            src={dataVideo.length > 0?dataVideo[0].url:''}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
          {/* <Video src={STPVideo} /> */}
        </Reveal>
      </Col>
    </Row>
  )
}
