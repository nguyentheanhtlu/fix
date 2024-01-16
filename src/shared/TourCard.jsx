

import React from 'react'
import {Card , CardBody} from 'reactstrap';
import {Link} from 'react-router-dom';
import './tour-card.css';

const TourCard = ({tour}) => {

  const {_id, title, city, photo, price, featured, reviews } = tour;
  const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
  
  // const avgRating = totalRating === 0 ? "" : totalRating === 1 ? totalRating : totalRating / reviews?.length;
  let avgRating;
  if(totalRating === 0) {
    avgRating = '';
  } else {
    if(totalRating === 1) {
      avgRating = totalRating;
    } else {
      avgRating = totalRating / (reviews?.length).toFixed(1);

    }
  }
  //------ Calculator Rating -------------

  return (
    <div className='tour__card'>
      <Card>
        <div className="tour__img">
          <img src={photo} alt="tour-img" />
          {featured && <span>Featured</span> }
        </div>
        <CardBody>
        <div className="card__top d-flex items-center justify-between">
          <span className="tour__location d-flex items-center gap-1">
            <i className="ri-map-pin-line"></i>
            {city}
          </span>

          <span className="tour__rating d-flex items-center gap-1">
            <i class="ri-star-fill"></i>
            {avgRating === 0 ? null : avgRating}
            {totalRating === 0 ? ( 'Not rated') 
            : (
                <span>({reviews.length})</span>
              )
            }
            
          </span>
        </div>

        <h5 className="tour__title">
          <Link to={`/tours/${_id}`}>{title}</Link>
        </h5>

        <div className="card__bottom d-flex items-center justify-between mt-3">
          <h5>${price} 
            <span>/ per person</span>
          </h5>

          <button className='btn booking__btn'>
            <Link to={`/tours/${_id}`}>Book Now</Link>
          </button>
        </div>
      </CardBody>

      </Card>

      
    </div>
  )
}

export default TourCard;