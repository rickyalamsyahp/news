import { Col, Row } from 'react-bootstrap'
import ThumbnailCommitments from '../../../../assets/images/commitments-homepage-thumbnail.png'
import Image from 'next/image'
import Reveal from '../../../Animation/Reveal/Reveal'
export default function Thumbnail() {
  return (
    <Row>
      <Col>
        <Reveal>
          <Image
            src={ThumbnailCommitments}
            alt='thumbnail-commitments'
            priority
            className='w-100 h-100 py-2 py-md-5'
          />
        </Reveal>
      </Col>
    </Row>
  )
}
