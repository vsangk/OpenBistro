import React from 'react';
import ReservationBooker from './reservation_booker';

class ReservationSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      partySize: 0,
      timeSlot: 0,
      dateSlot: "",
    };
  }

  render() {
    console.log(`res search: ${this.props.restaurantId}`);
    return (
      <div>
        <div className="reservation-search">
          <div className="reservation-search-party">
            <select>
              {[2,3,4,5,6].map( partySize => (
                <option key={partySize}
                  value={partySize}>{partySize} People</option>
              ))}
            </select>
          </div>
          <div className="reservation-search-date">
            <input type="date" name="dateSlot"/>
          </div>
          <div className="reservation-search-time">
            <select>
              {[5,6,7,8,9].map( timeSlot => (
                <option key={timeSlot} value={timeSlot}>
                  {timeSlot}:00 PM
                </option>
              ))}
            </select>
          </div>
          <div className="reservation-search-button">
            <button>Find Reservation</button>
          </div>
        </div>
        <p>Available Time Slots for **date here**</p>
        <ReservationBooker
          createReservation={this.props.createReservation}
          currentUserId={this.props.currentUserId}
          restaurantId={this.props.restaurantId} />
      </div>
    );
  }
}

export default ReservationSearch;
