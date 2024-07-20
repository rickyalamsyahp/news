'use client'

import Breadcrumb from 'react-bootstrap/Breadcrumb'

export default function Breadcrumbs({ data }) {
  return (
    <Breadcrumb className='d-none d-md-block'>
      {data.map((res, index) => (
        <Breadcrumb.Item
          key={`breadcrumb-${index}`}
          href={res.href}
          active={res.active}
          className={`${res.active ? '' : 'text-primary'} fw-bold`}
        >
          {res.text}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  )
}
