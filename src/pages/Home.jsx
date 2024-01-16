
import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import Subtitle from '../shared/Subtitle';
import experienceImg from '../assets/images/experience.png';
import gallery01 from '../assets/images/gallery-01.jpg';
import gallery02 from '../assets/images/gallery-02.jpg';
import gallery03 from '../assets/images/gallery-03.jpg';
import gallery04 from '../assets/images/gallery-04.jpg';
import gallery05 from '../assets/images/gallery-05.jpg';
import gallery06 from '../assets/images/gallery-06.jpg';
import gallery07 from '../assets/images/gallery-07.jpg';

import ServiceList from '../Services/ServiceList';
import SearchBar from '../shared/SearchBar';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';



const Home = () => {
  return (
    <>

      {/* -----------------Hero section------------- */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>Traveling opens the door to creating {" "} <span className='highlight'>memories</span></h1>
                <p className="">
                  Traveling is not only about discovering new
                  places but also an opportunity to encounter
                  unique experiences and meet new people.
                  Every trip is an opportunity to build memorable
                  memories and unforgettable moments in life.

                </p>
              </div>
            </Col>


            <Col lg='6'>
              <Row>
                <Col lg='4'>
                  <div className="hero__img-box">
                    <img src={heroImg} alt="" />
                  </div>
                </Col>
                <Col lg='4'>
                  <div className="hero__img-box mt-4">
                    <video src={heroVideo} alt="" controls />
                  </div>
                </Col>
                <Col lg='4'>
                  <div className="hero__img-box mt-5">
                    <img src={heroImg02} alt="" />
                  </div>

                </Col>
              </Row>
            </Col>

            <SearchBar />

            
          </Row>
        </Container>
      </section>


      {/* ------------- */}

      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className='services__subtitle'>What we serve</h5>
              <h2 className='services__title'>We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>

        </Container>
      </section>

      {/*------------------- Feature tour section start----------------- */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'} />
              <h2 className='featured__tour-title'>Our featured tours</h2>
            </Col>
            
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* ++++++++++++++++++++++++++++++++= Experience =============================== */}

      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'} />

                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, numquam!
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>

              <div className="counter__wrapper d-flex items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successfull Trip</h6>
                </div>

                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>

                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* =============================  Gallery section ================== */}
      <section>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="gallery__content">
                  <Subtitle subtitle={"Gallery"} />
                  <h2 className='gallery__title'>Visit our customer tour gallery</h2>
              </div>
            </Col>

            <Col lg={12}>
                <Row>
                  <Col lg={3} md={3} sm={6} xs={12}>
                    <Row>
                      <Col lg={12} >
                        <div className="gallery__img mt-4">
                          <img src={gallery01} alt="" />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <div className="gallery__img mt-4">
                          <img src={gallery03} alt="" />
                        </div>
                      </Col>
                    </Row>
                  </Col>

                  <Col lg={3} md={3} sm={6} xs={12}>
                    <Row>
                      <Col lg={12}>
                        <div className="gallery__img mt-4">
                          <img src={gallery07} alt="" />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <div className="gallery__img mt-4">
                          <img src={gallery04} alt="" />
                        </div>
                      </Col>
                    </Row>
                  </Col>

                  <Col lg={3} md={3} sm={6} xs={12}>
                    <Row>
                      <Col lg={12}>
                        <div className="gallery__img mt-4">
                          <img src={gallery02} alt="" />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <div className="gallery__img mt-4">
                          <img src={gallery05} alt="" />
                        </div>
                      </Col>
                    </Row>
                  </Col>

                  <Col lg={3} md={3} sm={6} xs={12}>
                    <Row>
                      <Col lg={12}>
                        <div className="gallery__img mt-4">
                          <img src={gallery06} alt="" />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <div className="gallery__img mt-4">
                          <img src={gallery07} alt="" />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
            </Col>
          </Row>
        </Container>
      </section>


      {/* ==================== Testimonial ======================= */}

      <section>
        <Container>
          <Row>
            <Col lg={12}>
              <Subtitle  subtitle={'Fans Love'}/>
              <h2 className='testimonial__title'>What our fans say about us</h2>

            </Col>
            <Col lg={12}>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================================ Newletters ======================== */}

     
      <Newsletter />
          



    </>
  )
}

export default Home;