import React from 'react'
export function Title({
  subtitle,
  title,
  readMore,
  description,
  onClick,
  download,
}) {
  return (
    <>
      {subtitle && <h6 className='text-warning fw-bold'>{subtitle}</h6>}
      {title && <h2 className='fw-bold'>{title}</h2>}
      {description && <h5>{description}</h5>}
      {download && (
        <a href='/brosur.pdf' download='Brosur ATD Product'>
          <h6
            className='text-secondary fw-bold pb-3 border-2 border-bottom border-warning d-inline-flex'
            style={{ cursor: 'pointer' }}
          >
            {download}
          </h6>
        </a>
      )}
      {readMore && (
        <span onClick={onClick}>
          <h6
            className='text-secondary fw-bold pb-3 border-2 border-bottom border-warning d-inline-flex'
            style={{ cursor: 'pointer' }}
          >
            {readMore}
          </h6>
        </span>
      )}
    </>
  )
}
