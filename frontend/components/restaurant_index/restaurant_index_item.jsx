import React from 'react';
import { Link, hashHistory } from 'react-router';

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

  const starRating = () => {
    // after ratings are implemented, pass in average rating as prop
    let width = 87;
    let starStyle = {width: `${width}%`};

    return (
      <div className="star-ratings-css">
        <div className="star-ratings-css-top" style={starStyle}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
      </div>
    );
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
              <li>{starRating()}</li>
              <li>{`$`.repeat(restaurant.price)}{greyDollars()}</li>
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
