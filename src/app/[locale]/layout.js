import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import { Open_Sans, Nunito_Sans } from 'next/font/google'
import '../../styles/global.scss'
import 'animate.css/animate.compat.css'
import Footer from '../../components/Footer/Footer'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--body-font',
})
const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-nunito-sans',
})
export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      translate='no'
      className={`${openSans.variable} ${nunitoSans.variable}`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <NavigationBar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
