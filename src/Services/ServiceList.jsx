
import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'


import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const ServiceList = () => {

    const serviceData = [
      {
        imgUrl: weatherImg,
        title: 'Calculate weather',
        desc: 'Get the weather in your city'
      },
      {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
        desc: 'Get the guide in your city'
      },
      {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: 'Get the customization in your city'
      }
    ];


  return (
   <>
    {
        serviceData.map((item, index) => 
            <Col lg='3' key={index}>
                <ServiceCard item={item} />
            </Col>
        )
    }
   </>
  )
}

export default ServiceList;