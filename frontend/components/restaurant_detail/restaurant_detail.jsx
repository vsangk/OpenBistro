import React from 'react';
import DetailsMap from '../map/map';

class RestaurantDetail extends React.Component {
  constructor(props) {
    super(props);

    this.getAddress = this.getAddress.bind(this);
  }

  componentDidMount() {
    this.props.requestRestaurantDetail(this.props.restaurantId);
  }

  getAddress() {
    let address;
    let street = this.props.restaurantDetail.address;
    let cityName = this.props.restaurantDetail.city_name;
    let state = this.props.restaurantDetail.state;
    let zipCode = this.props.restaurantDetail.zip_code;

    address = `${street} ${cityName}, ${state} ${zipCode}`;

    console.log(address);
    return address;
  }

  render() {
    let restaurantDetailStyle = {
      backgroundImage: `url(${this.props.restaurantDetail.image_url})`
    };

    return (
      <div className="detail-flex-container">
        <div className="detail-header">
          <div className="detail-header-bg">
            <div className="detail-header-content">

            </div>
          </div>
        </div>

        <div className="detail-main">
          <div className="detail-main-reservation content-block">
            <h3>Make a reservation</h3>
          </div>
          <div className="detail-main-about content-block">
            <h3>About {this.props.restaurantDetail.name}</h3>
            <div className="map-container">
              <DetailsMap address={this.getAddress('lineBreak')} />
              <div className="map-address">{this.getAddress()}</div>
            </div>
            <p>{this.props.restaurantDetail.description}</p>
          </div>
          <div className="detail-main-photos content-block">
            <h3>Restaurant Photos</h3>
          </div>
          <div className="detail-main-reviews content-block">
            <h3>{this.props.restaurantDetail.name} Ratings and Reviews</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantDetail;
