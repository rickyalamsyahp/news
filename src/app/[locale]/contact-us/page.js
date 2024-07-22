import { getTranslations } from 'next-intl/server'
import { metadata } from '../../shared-metadata'
import FormContact from '../../../components/ContactUs/FormContact/FormContact'
import NotesContact from '../../../components/ContactUs/NotesContact/NotesContact'
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })

  return {
    ...metadata(t('contact-us.title'), t('contact-us.description')),
  }
}

export default function Page() {
  return (
    <section className='bg-secondary-subtle'>
      <FormContact />
      <NotesContact />
    </section>
  )
}
