import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import "../../styles/about_section.css"
import bmwOffer from '../../assets/all-images/cars-img/bmw-offer.png';
const AboutSection = ({aboutClass}) => {
  return (
    <section className="about_section" >
    <Container>
        <Row>
            <Col lg='6'md='6'>
            <div className="about_section-content">
                <h4 className='section_subtitle'>About Us</h4>
                <h2 className='section_title'>Welcome to car rent service</h2>
                <p  className="section__description ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod vel dolor aliquam magni repellat harum eligendi ea veniam saepe? Sint accusantium explicabo ratione rerum omnis in neque suscipit sequi magni tempora, ea amet pariatur praesentium, aliquid deleniti natus molestiae?</p>

            <div className="about_section-item d-flex align-items-center">
                <p className='section__description d-flex align-items-center '>
                <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet.
                </p>

                <p className="section__description d-flex align-items-center ">
                <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet.
                </p>
                </div>
                

                <div className="about_section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center ">
                <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                </p>
                
                <p className="section__description d-flex align-items-center ">
                <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                </p>
            </div>  
            </div>
            </Col>
            <Col lg='6'md='6'>
            <div className='about_img'>
           <img src={bmwOffer} alt="" className='w-100' />
            </div>
            </Col>
        </Row>
    </Container>
    </section>
  )
}

export default AboutSection