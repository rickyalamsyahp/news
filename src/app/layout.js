// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
/*
export default function RootLayout({ children }) {
  return children
}
*/

export default function RootLayout({ children }) {
  return (
    <html lang="id">
        <body>
        {children}
      </body>
    </html>
  )
}
