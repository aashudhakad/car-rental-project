import React from 'react'
import Slider from 'react-slick'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import "../../styles/hero-slider.css"

const HeroSlider = () => {
    const settings={
        fade:true,
        speed:2000,
        autoplaySpeed:3000,
        infinite:true,
        autoplay:true,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHover:false,
    };

  return (
   <Slider {...settings} className='hero_slider'>
    <div className="slider_item slider_item-01 mt0">
        <Container>
            <div className="slider_content">
                <h6 className="text-light mb-3">For Rent $50 Per Day</h6>
                <h1 className="text-light">Reserve Now and Get 50% Off</h1>
                <buttom className="btn reserve_btn mt-4">
                    <Link to="/cars">Reserve Now</Link>
                </buttom>
            </div>
        </Container>
    </div>

    <div className="slider_item slider_item-02 mt0">
        <Container>
            <div className="slider_content">
                <h6 className="text-light mb-3">For Rent $50 Per Day</h6>
                <h1 className="text-light">Reserve Now and Get 50% Off</h1>
                <buttom className="btn reserve_btn mt-4">
                    <Link to="/cars">Reserve Now</Link>
                </buttom>
            </div>
        </Container>
    </div>

    <div className="slider_item slider_item-03 mt0">
        <Container>
            <div className="slider_content">
                <h6 className="text-light mb-3">For Rent $50 Per Day</h6>
                <h1 className="text-light">Reserve Now and Get 50% Off</h1>
                <buttom className="btn reserve_btn mt-4">
                    <Link to="/cars">Reserve Now</Link>
                </buttom>
            </div>
        </Container>
    </div>




   </Slider>
  )
}

export default HeroSlider