import React from 'react'
import { Col } from 'reactstrap'
import "../../styles/services-list.css"
import servicesData from "../../assets/data/serviceData"

const ServicesList = () => {
  return(
      <>
      {servicesData.map((item)=>(
          <ServiceItem item={item} key={item.id}/>
          
      ))}
        </>
);
};

const ServiceItem = ({item}) => (
    <Col lg="4" md='4' sm='6' className='mb-3'>
        <div className="service_item d-inline-block">
            <span className='mb-3'>
                <i class={item.icon}/>
            </span>
            <h6>{item.title}</h6>
            <p className='service-para'>{item.desc}</p>
        </div>
    </Col>
);

export default ServicesList