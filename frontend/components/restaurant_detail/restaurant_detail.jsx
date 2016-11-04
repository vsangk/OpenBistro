import React from 'react';

class RestaurantDetail extends React.Component {
  componentDidMount() {
    this.props.requestRestaurantDetail(this.props.restaurantId);
  }

  render() {
    let restaurantDetailStyle = {backgroundImage: `url(${this.props.restaurantDetail.image_url})`};

    return (
      <div>
        <div className="restaurant-detail-header">

        </div>

        <div className="restaurant-detail-main">
          <p>{this.props.restaurantDetail.description}</p>
        </div>
      </div>
    );
  }
}

export default RestaurantDetail;
