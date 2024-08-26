import { Button } from 'react-bootstrap'
import ArrowRight from '../../../assets/svg/arrow-right.svg'
import './style.scss'

export function ButtonPrimary({ children }) {
  return (
    <Button variant={'primary'} className={`btn-custom`}>
      {children}
      <ArrowRight />
    </Button>
  )
}

export function ButtonSecondary({ children, mobile }) {
  return (
    <Button
      variant={'light'}
      className={`btn-custom bg-white text-primary ${mobile && 'ms-auto'}`}
      style={{
        padding: '8px 24px',
        borderRadius: '10px',
      }}
    >
      {children}
      <ArrowRight className='svg-secondary' />
    </Button>
  )
}

export function ButtonThird({
  children,
  onSubmit,
  variant,
  className,
  noArrow,
  disabled,
}) {
  return (
    <Button
      variant={variant ? variant : 'warning'}
      className={`btn-custom ${variant ? className : 'text-white'} nunito-sans`}
      style={{
        padding: '16px 24px',
        borderRadius: '4px',
      }}
      type={onSubmit}
      disabled={disabled}
    >
      {children}
      {noArrow ? '' : <ArrowRight />}
    </Button>
  )
}
