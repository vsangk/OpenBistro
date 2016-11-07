import React from 'react';
import DetailsMap from '../map/map';
import Review from './review';
import RestaurantIndexItem from '../restaurant_index/restaurant_index_item';

class RestaurantDetail extends React.Component {
  constructor(props) {
    super(props);

    this.getAddress = this.getAddress.bind(this);
    this.getDetailImages = this.getDetailImages.bind(this);
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

    address = `${street}
${cityName}, ${state} ${zipCode}`;

    return address;
  }

  // better way?
  getDetailImages() {
    let imageUrls;
    imageUrls = this.props.restaurantDetail.detail_image_url;

    return imageUrls.map((imageUrl, idx) => {
      let imageStyle = { backgroundImage: `url(${imageUrl})`};
      return <div key={idx} style={imageStyle} className="detail-photos"/>;
    });
  }

  render() {
    let restaurantImageStyle = {
      backgroundImage: `url(${this.props.restaurantDetail.image_url})`
    };

    // <RestaurantIndexItem restaurant={this.props.restaurant}/>
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
            <div className="detail-photos-container">
              {this.getDetailImages()}
            </div>
          </div>
          <div className="detail-main-reviews content-block">
            <h3>{this.props.restaurantDetail.name} Ratings and Reviews</h3>

            {this.props.reviews.map(review => (
              <Review key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantDetail;
