import React from 'react';
import { Link, hashHistory } from 'react-router';
import { starRating } from '../misc/stars';

const RestaurantIndexItem = ({ restaurant }) => {
  let restaurantStyle = {backgroundImage: `url(${restaurant.image_url})`};

  const timeSlotButtons = () => {
    let timeSlots = ['5:00', '6:00', '7:00', '8:00', '9:00'];
    timeSlots = timeSlots.map((timeSlot, idx) => (
      <li key={idx}>
        <button>{timeSlot} PM</button>
      </li>
    ));
    return timeSlots;
  };

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
              <li>{starRating(87)}</li>
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
            <ul>{timeSlotButtons()}</ul>
          </div>
        </div>
    </div>
  );
};

export default RestaurantIndexItem;
