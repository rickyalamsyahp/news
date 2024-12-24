// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
/*
export default function RootLayout({ children }) {
  return children
}
*/

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Script GA4 - gtag.js */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0C6THVCTKG" strategy="afterInteractive"></script>
        <script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-0C6THVCTKG');
        `}
        </script>
        </head>
        <body>
        {children}
      </body>
    </html>
  )
}
