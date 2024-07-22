'use client'

import { useTranslations } from 'next-intl'
import { Container } from 'react-bootstrap'
import { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { ButtonThird } from '../../GeneralComponent/CustomButton/CustomButton'

function ContactUs() {
  const t = useTranslations('contact-us')
  const [validated, setValidated] = useState(false)

  const handleSubmit = event => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <section className='py-5'>
      <Container>
        <h2 className='fw-bold pb-5'>{t('title')}</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className='mb-4'>
            <Form.Group as={Col} md='3' controlId='validationCustom01'>
              <Form.Label>{t('form.full-name')}</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder={t('placeholder.full-name')}
              />
            </Form.Group>
            <Form.Group as={Col} md='3' controlId='validationCustom02'>
              <Form.Label>{t('form.location')}</Form.Label>
              <Form.Select aria-label='Default select example'>
                <option>{t('placeholder.location')}</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md='3' controlId='validationCustomUsername'>
              <Form.Label>{t('form.email')}</Form.Label>
              <Form.Control
                type='email'
                placeholder='name@example.com'
                required
              />
            </Form.Group>
            <Form.Group as={Col} md='3' controlId='validationCustomUsername'>
              <Form.Label>{t('form.phone')}</Form.Label>
              <Form.Control type='tel' placeholder='+6287283472' required />
            </Form.Group>
          </Row>
          <Row className='mb-4'>
            <Form.Group as={Col} md='3' xs='12' controlId='validationCustom03'>
              <Form.Label>{t('form.subject')}</Form.Label>
              <Form.Select aria-label='Default select example'>
                <option>{t('placeholder.subject')}</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className='mb-4'>
            <Form.Group
              as={Col}
              md='6'
              xs='12'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>{t('form.message')}</Form.Label>
              <Form.Control
                as='textarea'
                rows={5}
                placeholder={t('placeholder.message')}
                required
              />
            </Form.Group>
          </Row>
          <ButtonThird type='submit'>{t('form.submit')}</ButtonThird>
        </Form>
      </Container>
    </section>
  )
}

export default ContactUs
