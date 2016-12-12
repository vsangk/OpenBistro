import React from 'react';
import { Link, hashHistory } from 'react-router';
import { starRating } from '../misc/stars';
import { dateToday } from '../misc/today';
import ReservationBooker from '../reservation/reservation_booker';

const RestaurantIndexItem = ({ restaurant, avgRating, totalReviews, createReservation, availableToday }) => {
  let restaurantStyle = {backgroundImage: `url(${restaurant.image_url})`};

  const greyDollars = () => {
    let greyDollarSigns = `$`.repeat(4 - restaurant.price);
    let greyStyle = {color: `#ccc`};
    return <p style={greyStyle}>{greyDollarSigns}</p>;
  };

  return (
    <div className="restaurant-index-item">
      <Link to={`/restaurant/${restaurant.id}`} style={restaurantStyle} className="restaurant-index-item-pic" />
        <div className="restaurant-index-item-content">
          <div className="riic-title">
            <Link to={`/restaurant/${restaurant.id}`}>{restaurant.name}</Link>
          </div>
          <div className="riic-reviews-price">
            <ul>
              <div className="dhc-reviews">
                <span className="review-stars">{starRating(avgRating)}</span>
                <span style={{margin: '3px'}}>{totalReviews} Reviews</span>
              </div>
              <li className="dollars">{`$`.repeat(restaurant.price)}{greyDollars()}</li>
            </ul>
          </div>
          <div className="riic-type-neighborhood">
            <ul>
              <li>{restaurant.category}</li>
              <li>{restaurant.neighborhood}</li>
            </ul>
          </div>
          <div className="riic-time-slots">
            <ReservationBooker
              createReservation={createReservation}
              restaurantId={restaurant.id}
              dateSlot={dateToday()}
              availableTimes={availableToday}
              partySize="2"/>
          </div>
        </div>
    </div>
  );
};

export default RestaurantIndexItem;
