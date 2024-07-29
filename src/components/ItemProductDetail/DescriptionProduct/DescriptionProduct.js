import React from 'react'
import { ButtonThird } from '../../GeneralComponent/CustomButton/CustomButton'
import { Link } from '../../../navigation'
import { useTranslations } from 'next-intl'
import { TableProduct } from '../TableProduct/TableProduct'

function DescriptionProduct() {
  const t = useTranslations('innovation')
  return (
    <div className='d-flex justify-content-md-between flex-column h-100 gap-3 gap-md-0'>
      <div className='d-flex justify-content-between'>
        <h2 className='fw-bold text-primary'>PA Extruder</h2>
        <div className='d-none d-md-block'>
          <ButtonThird>
            <Link href='/contact-us'>{t('contact-us')}</Link>
          </ButtonThird>
        </div>
      </div>
      <div className='d-flex flex-column justify-content-between gap-2 gap-md-3'>
        <div className='d-flex flex-row'>
          <h6 className='text-dark w-25'>Species </h6>
          <h5 className='fw-bold'>Common Carp </h5>
        </div>
        <div className='d-flex flex-row'>
          <h6 className='text-dark w-25'>Stage </h6>
          <h5 className='fw-bold'>Grower </h5>
        </div>
        <div className='d-flex flex-row'>
          <h6 className='text-dark w-25'>Category </h6>
          <h5 className='fw-bold'>Premium </h5>
        </div>
      </div>
      <div className='d-block d-md-none mt-auto'>
        <ButtonThird>
          <Link href='/contact-us'>{t('contact-us')}</Link>
        </ButtonThird>
      </div>
      <h6 className='d-none d-md-block'>
        PA Extruder is a premium floating pellet feed designed for the grower
        phase of carp species. This environmentally friendly feed promotes
        optimal growth in carp, whether in floating net cages, fast-flowing
        water ponds, or earthen ponds. With a protein content of 28%, PA
        Extruder ensures consistent quality in fish growth.
      </h6>
      <div className='d-none d-md-block'>
        <TableProduct />
      </div>
    </div>
  )
}

export default DescriptionProduct
