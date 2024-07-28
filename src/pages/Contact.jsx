import React from 'react'
import { Container,Col,Row,Form,FormGroup,Input } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection';
import { Link } from 'react-router-dom';
import "../styles/contact.css"

const Contact = () => {
    const socialLinks = [
        {
          url: "#",
          icon: "ri-facebook-line",
        },
        {
          url: "#",
          icon: "ri-instagram-line",
        },
        {
          url: "#",
          icon: "ri-linkedin-line",
        },
        {
          url: "#",
          icon: "ri-twitter-line",
        },
      ];
  return (
   <Helmet title="Contact">
    <CommonSection title="Contact"/>
    <Container>
        <Row>
            <Col lg='7' md='7'>
            <h6 className="fw-bold mb-4">Get In Touch</h6>

            <Form>
                <FormGroup className='contact_form'>
                    <Input placeHolder="Your Name" type="text"></Input>
                </FormGroup>
                <FormGroup className='contact_form'>
                    <Input placeHolder="Email" type="email"></Input>
                </FormGroup>
                <FormGroup className='contact_form'>
                    <textarea rows='5' placeholder='Message' className='textarea'></textarea>
                </FormGroup>

                <button className='btn contact_btn' type="submit">Send</button>
            </Form>
            </Col>

            <Col lg='5' md='5'>
            <div className="contact_info">
                <h6 className='fw-bold'>Contact Information</h6>
                <p className="section_description mb-0">213 Bh1,abv iiitm campus ,gwalior(M.P),India</p>
                <div className="d-flex align-items-center gap-2">
                    <h6 className='mb-0 fs-6'>Phone:</h6>
                    <p className="section_description mb-0"> +91 1234567890</p>
                </div>

                <div className="d-flex align-items-center gap-2">
                    <h6 className='mb-0 fs-6'>Email:</h6>
                    <p className="section_description mb-0"> customerCarRent@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className='d-flex align-items-center gap-4 mt-3'>
                    {
                        socialLinks.map((item,index)=>(
                            <Link to={item.Url} key={index} className='social_link-icon'><i class={item.icon}></i></Link>
                        ))
                    }
                </div>
            </div>
            </Col>
        </Row>
    </Container>
   </Helmet>
  )
}

export default Contact