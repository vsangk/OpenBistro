import React from 'react';
import DetailsMap from '../misc/map';
import Review from './review';
import CreateReviewModalContainer from '../review_modals/create_review_modal_container';
import { starRating } from '../misc/stars';
import ReservationSearch from '../reservation/reservation_search';

class RestaurantDetail extends React.Component {
  constructor(props) {
    super(props);

    this.getAddress = this.getAddress.bind(this);
    this.getDetailImages = this.getDetailImages.bind(this);
    this.getHeader = this.getHeader.bind(this);
  }

  componentDidMount() {
    this.props.requestRestaurantDetail(this.props.restaurantId);
  }

  componentWillUnmount() {
    this.props.clearReviews();
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

  getHeader() {
    const greyDollars = () => {
      let greyDollarSigns = `$`.repeat(4 - this.props.restaurantDetail.price);
      let greyStyle = {color: `#ccc`};
      return <p style={greyStyle}>{greyDollarSigns}</p>;
    };

    let picStyle = {backgroundImage: `url(${this.props.restaurantDetail.image_url})`};

    return (
      <div className="dhc-container">
        <div style={picStyle} className="dhc-pic" />
        <div className="dhc-content">
          <div className="dhc-title">{this.props.restaurantDetail.name}</div>
          <div className="dhc-reviews">
            <span className="review-stars">{starRating(this.props.restaurantDetail.avg_rating)}</span>
            <span>{this.props.restaurantDetail.total_reviews} Reviews</span>
          </div>
          <div className="dhc-type-details">
            <ul>
              <li>{this.props.restaurantDetail.category}</li>
              <li className="spacer">|</li>
              <li>{this.props.restaurantDetail.neighborhood}</li>
              <li className="spacer">|</li>
              <li className="dollars">{`$`.repeat(this.props.restaurantDetail.price)}{greyDollars()}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

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

    return (
      <div className="detail-flex-container">
        <div className="detail-header">
          <div className="detail-header-content">
            {this.getHeader()}
          </div>
        </div>

        <div className="detail-main">
          <div className="detail-main-reservation content-block">
            <h3>Make a reservation</h3>
            <ReservationSearch
              createReservation={this.props.createReservation}
              currentUserId={this.props.currentUser.id}
              restaurantId={this.props.restaurantId}
              availableTimes={this.props.restaurantDetail.available_times}
              fetchTimes={this.props.fetchTimes}/>
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
            {this.props.currentUser.id === -1 ? <div/> :
              <CreateReviewModalContainer
                restaurantId={this.props.restaurantDetail.id}
                currentUserId={this.props.currentUser.id}/>
            }
            <div className="review-container">
              {this.props.reviews.map(review => (
                <Review key={review.id}
                  review={review}
                  currentUser={this.props.currentUser}
                  restaurantId={this.props.restaurantDetail.id}
                  deleteReview={this.props.deleteReview}
                  />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantDetail;
