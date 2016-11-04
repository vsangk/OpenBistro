import React from 'react';
import { Link, hashHistory } from 'react-router';

const RestaurantIndexItem = ({ restaurant }) => {
  let restaurantStyle = {backgroundImage: `url(${restaurant.image_url})`};

  return (
    <div className="restaurant-item">
      <div style={restaurantStyle} className="restaurant-item-pic" />
      <div className="restaurant-item-text">
        <h2>{restaurant.name}</h2>
        <h3>{restaurant.category}</h3>
        <h3>{`$`.repeat(restaurant.price)}</h3>
      </div>
    </div>
  );
};

// <Link to={`/restaurant/${restaurant.id}`}></Link>
export default RestaurantIndexItem;
