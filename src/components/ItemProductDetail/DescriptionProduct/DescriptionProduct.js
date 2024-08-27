import React from 'react'
import { ButtonThird } from '../../GeneralComponent/CustomButton/CustomButton'
import { Link } from '../../../navigation'
import { useTranslations } from 'next-intl'

function DescriptionProduct({ product }) {
  const t = useTranslations('innovation')
  return (
    <div className='d-flex justify-content-md-between flex-column h-100 gap-3 gap-md-0'>
      <div className='d-flex flex-column gap-2 gap-xl-5'>
        <div className='d-flex justify-content-between'>
          <h2 className='fw-bold text-primary'>{product?.feed_name}</h2>
        </div>
        <div className='d-flex flex-column justify-content-between gap-2 gap-md-3'>
          <div className='d-flex flex-row gap-2 gap-md-0'>
            <h6 className='text-dark w-25'>Species </h6>
            <h5 className='fw-bold'>
              {product?.species?.data[0]?.attributes?.name}
            </h5>
          </div>
          <div className='d-flex flex-row gap-2 gap-md-0'>
            <h6 className='text-dark w-25'>Stage </h6>
            <h5 className='fw-bold'>
              {product?.phases?.data[0]?.attributes?.name}
            </h5>
          </div>
          <div className='d-flex flex-row gap-2 gap-md-0'>
            <h6 className='text-dark w-25'>Category </h6>
            <h5 className='fw-bold'>
              {product?.feed_shapes?.data[0]?.attributes?.name}
            </h5>
          </div>
        </div>
        <h6 className='d-none d-md-block'>{product?.highlight}</h6>
      </div>
      <div className='d-flex flex-column flex-md-row gap-4 mt-auto mt-md-0'>
        <ButtonThird
          variant={'outline-warning'}
          noArrow={true}
          className={'bg-white text-warning'}
        >
          <Link href='#'>Download Brochure</Link>
        </ButtonThird>
        <ButtonThird>
          <Link href='/contact-us'>{t('contact-us')}</Link>
        </ButtonThird>
      </div>
      {/* <div className='d-none d-md-block'>
        <TableProduct />
      </div> */}
    </div>
  )
}

export default DescriptionProduct
