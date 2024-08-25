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
import { getCities, getSolutions, getAddress } from '../../../api/responseApi'

export default async function Page({ params: { locale } }) {
  const cities = await getCities()
  const solutions = await getSolutions({ locale })
  const addresses = await getAddress()
  console.log(addresses)
  const city = cities?.data?.data
  const solution = solutions?.data?.data
  const address = addresses?.data?.data

  return (
    <section className='bg-secondary-subtle'>
      <FormContact cities={city} solutions={solution} />
      <NotesContact  address={address} />
    </section>
  )
}
