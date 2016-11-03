import React from 'react';
import { Link, hashHistory } from 'react-router';

const RestaurantIndexItem = ({ restaurant }) => (
  <li>
    <Link to={`/restaurant/${restaurant.id}`}>
      {restaurant.name}&nbsp;
      {restaurant.category}&nbsp;
      {restaurant.price}&nbsp;
    </Link>
  </li>
);

export default RestaurantIndexItem;
