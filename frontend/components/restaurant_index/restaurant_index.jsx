import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllRestaurants(this.props.params.cityId);
  }

  render() {
    return (
      <div className="restaurant-item-container">
        {this.props.restaurants.map( restaurant => (
          <RestaurantIndexItem key={restaurant.id} restaurant={restaurant}/>
        ))}
      </div>
    );
  }
}

export default RestaurantIndex;
