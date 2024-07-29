'use client'
import { useTranslations } from 'next-intl'
import { Col } from 'react-bootstrap'
import { Title } from '../../../GeneralComponent/Title/Title'
import Reveal from '../../../Animation/Reveal/Reveal'
import { useRouter } from '../../../../navigation'

export function TitleTotalSolutions() {
  const router = useRouter()
  const t = useTranslations('homepage.total-solutions')
  return (
    <Col className='pb-2 pb-md-5'>
      <Reveal overflow={true}>
        <div className='d-flex flex-column gap-4 '>
          <Title
            subtitle={t('subtitle')}
            title={t('title')}
            readMore={t('see-all')}
            onClick={() => router.push('/total-solutions')}
          />
        </div>
      </Reveal>
    </Col>
  )
}
