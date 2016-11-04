import React from 'react';
import { Link, hashHistory } from 'react-router';

const RestaurantIndexItem = ({ restaurant }) => {
  let restaurantStyle = {backgroundImage: `url(${restaurant.image_url})`};

  return (
    <div className="restaurant-item">
      <div style={restaurantStyle} className="restaurant-item-pic" />
      <div className="restaurant-item-text">
        <Link to={`/restaurant/${restaurant.id}`}>{restaurant.name}</Link>
        <h3>{restaurant.category}</h3>
        <h3>{`$`.repeat(restaurant.price)}</h3>
      </div>
    </div>
  );
};

export default RestaurantIndexItem;
