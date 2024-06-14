import { useTranslations } from 'next-intl'
import { Col } from 'react-bootstrap'
import { Title } from '../../../GeneralComponent/Title/Title'

export function TitleTotalSolutions() {
  const t = useTranslations('homepage.total-solutions')
  return (
    <Col className='d-flex flex-column gap-4 pb-5'>
      <Title
        subtitle={t('subtitle')}
        title={t('title')}
        readMore={t('see-all')}
      />
    </Col>
  )
}
