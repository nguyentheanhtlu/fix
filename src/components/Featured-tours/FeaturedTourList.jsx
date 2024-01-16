

import React, { useEffect } from 'react'
import TourCard from '../../shared/TourCard';
import tourData from '../../assets/data/tours';
import { Col } from 'reactstrap';
import useAxios from '../../hooks/useAxios';

const FeaturedTourList = () => {

  const apiUrl = 'https://travel-jyb6.onrender.com/tours';

  const {data: featuredTours, loading, error} = useAxios(apiUrl);
  const featured = featuredTours.filter(tour => tour.featured === true);




  return( <>
    {
      loading && <h4>Loading............</h4>
    }
    {
      error && <h4>{error}</h4>
    }
    {
      !loading && !error && featured?.map((tour, index) => (
        <Col lg='3' className='mb-4' key={tour._id}>
          <TourCard tour={tour} />
        </Col>
      ))
    }


  </>
  );
}

export default FeaturedTourList;