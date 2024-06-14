import { Col, Row } from 'react-bootstrap'
import ThumbnailCommitments from '../../../../assets/images/commitments-homepage-thumbnail.png'
import Image from 'next/image'

export default function Thumbnail() {
  return (
    <Row>
      <Col>
        <Image
          src={ThumbnailCommitments}
          alt='thumbnail-commitments'
          priority
          className='w-100 h-100 py-5'
        />
      </Col>
    </Row>
  )
}
