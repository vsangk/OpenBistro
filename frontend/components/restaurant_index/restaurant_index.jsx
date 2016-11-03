import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllRestaurants(this.props.params.cityId);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.restaurants.map( restaurant => (
            <RestaurantIndexItem key={restaurant.id} restaurant={restaurant}/>
          ))}
        </ul>
      </div>
    );
  }
}

export default RestaurantIndex;
