'use client'
import { useTranslations } from 'next-intl'
import { Container } from 'react-bootstrap'
import { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { ButtonThird } from '../../GeneralComponent/CustomButton/CustomButton'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'
import { CONTACTS } from '../../../api/constant'
import { Alert } from 'react-bootstrap'

function ContactUs({ cities, solutions }) {
  const t = useTranslations('contact-us')
  const [validated, setValidated] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState(null)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showDiv, setShowDiv] = useState(true)

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    location: '',
    subject: '',
    message: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false || !recaptchaToken) {
      event.stopPropagation()
    } else {
      setIsSubmitting(true)
      try {
        const response = await axios.post(CONTACTS, {
          ...formData,
          recaptchaToken,
        })
        if (response.data.success) {
          // Handle success response
          console.log('Form submitted successfully')
          /*
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            location: '',
            subject: '',
            message: '',
          })
          */
          setRecaptchaToken(null)
          //setAlertMessage('Pesan Anda telah berhasil dikirim.')
          setAlertMessage('Message submitted successfully.')
          setShowAlert(true)
        }
      } catch (error) {
        // Handle error response
        console.error('Error submitting form:', error)
        //setAlertMessage('Terjadi kesalahan, silakan coba lagi.')
        setAlertMessage('Something went wrong, please try again.')
        setShowAlert(true)
      }
      setIsSubmitting(false)
      setShowDiv(false)
    }
    setValidated(true)
  }

  const onRecaptchaChange = (token) => {
    setRecaptchaToken(token)
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
                type='text'
                placeholder={t('placeholder.full-name')}
                name='fullname'
                value={formData.fullname}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col} md='3' controlId='validationCustomUsername'>
              <Form.Label>{t('form.email')}</Form.Label>
              <Form.Control
                type='email'
                placeholder='name@example.com'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col} md='3' controlId='validationCustomUsername'>
              <Form.Label>{t('form.phone')}</Form.Label>
              <Form.Control 
                type='tel' 
                placeholder='+6287283472' 
                name='phone'
                value={formData.phone}
                onChange={handleInputChange}
                required 
              />
            </Form.Group>
          </Row>
          <Row className='mb-4'>
            <Form.Group as={Col} md='3' controlId='validationCustom02'>
              <Form.Label>{t('form.location')}</Form.Label>
              <Form.Select 
                aria-label='Default select example'
                name='location'
                value={formData.location || ''}
                onChange={handleInputChange}
              >
                {cities.map((data) => (
                  <option key={data.id} value={data.attributes.name}>{data.attributes.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md='6' xs='12' controlId='validationCustom03'>
              <Form.Label>{t('form.subject')}</Form.Label>
              <Form.Select 
                aria-label='Default select example'
                name='subject'
                value={formData.subject || ''}
                onChange={handleInputChange}
              >
                {solutions.map((data) => (
                  <option key={data.id} value={data.attributes.title}>{data.attributes.title}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className='mb-4'>
            <Form.Group
              as={Col}
              md='9'
              xs='12'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>{t('form.message')}</Form.Label>
              <Form.Control
                as='textarea'
                rows={5}
                placeholder={t('placeholder.message')}
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Row>
          <ReCAPTCHA
            sitekey="6LcKmC4qAAAAAP3cd2XE46Gh0_SuvFEmu1ouQtlR"
            onChange={onRecaptchaChange}
          />
          {showDiv && (
            <div style={{float:'left',marginTop:'30px',marginRight:'20px'}}>
            <ButtonThird type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : t('form.submit')}
            </ButtonThird>
            </div>
          )}
          <div style={{float:'left',marginTop:'30px'}}>
          {showAlert && (
            <Alert variant='success' onClose={() => setShowAlert(false)} dismissible>
              {alertMessage}
            </Alert>
          )}
          </div>
          <div style={{clear:'both'}}></div>
        </Form>

      </Container>
    </section>
  )
}

export default ContactUs
