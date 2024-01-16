import React from 'react'
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,

        reponsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    }


    return <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <div className="d-flex items-center gap-4">
                <img src={ava01} className='w-1/4 h-1/4 rounded-lg' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
            <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               
            </p>
        </div>

        <div className="testimonial py-4 px-3">
            <div className="d-flex items-center gap-4">
                <img src={ava02} className='w-1/4 h-1/4 rounded-lg' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Lia Frank</h6>
                    <p>Customer</p>
                </div>
            </div>
            <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               
            </p>
        </div>


        <div className="testimonial py-4 px-3">
            <div className="d-flex items-center gap-4">
                <img src={ava03} className='w-1/4 h-1/4 rounded-lg' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Elon Musk</h6>
                    <p>Customer</p>
                </div>
            </div>
            <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam,perspiciatis? Cono reprehenderit quis, nihil accusamus asperiores corrupti iusto aut quo dolorem possimus.
                , itaque placeat sapiente.
            </p>
        </div>

        <div className="testimonial py-4 px-3">
            <div className="d-flex items-center gap-4">
                <img src={ava03} className='w-1/4 h-1/4 rounded-lg' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Elon Musk</h6>
                    <p>Customer</p>
                </div>
            </div>
            <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                
            </p>
        </div>

        
    </Slider>
}

export default Testimonials;