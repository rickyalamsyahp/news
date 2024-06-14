export const metadata = (title, description) => ({
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_BASE_URL),
  title: title,
  description: description,
  keywords: [],
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    images: ['/thumbnail.png'],
  },
  twitter: {
    title: title,
    description: description,
    card: 'summary_large_image',
    images: ['/thumbnail.png'],
  },
})
