import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllRestaurants(this.props.params.cityId);
  }

  render() {
    return (
      <div className="restaurant-flex-container">
        <div className="restaurant-flex-items">
        <div className="restaurant-index-header"><h2>{this.props.cityName} Restaurants:</h2></div>
          {this.props.restaurants.map( restaurant => (
            <RestaurantIndexItem key={restaurant.id} restaurant={restaurant}/>
          ))}
        </div>
      </div>
    );
  }
}

export default RestaurantIndex;
