import React from 'react';
import ReservationBooker from './reservation_booker';

class ReservationSearch extends React.Component {
  constructor(props) {
    super(props);

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();

    if (dd < 10) {
        dd = `0${dd}`;
    }

    if (mm < 10) {
        mm = `0${mm}`;
    }

    today = `${yyyy}-${mm}-${dd}`;

    // hardcoded for testing
    this.state = {
      party_size: 2,
      date_slot: today,
      restaurant_id: this.props.restaurantId,
      hideBooker: true
    };

    // // real, timeSlot not really used for now
    // this.state = {
    //   partySize: 0,
    //   timeSlot: 0,
    //   dateSlot: "",
    // };

    this.update = this.update.bind(this);
    this.handleTimes = this.handleTimes.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleTimes() {
    return(e) => {
      e.preventDefault();

      this.props.fetchTimes({
        party_size: this.state.party_size,
        date_slot: this.state.date_slot,
        restaurant_id: this.state.restaurant_id
      });

      this.setState({ hideBooker: false });
    };
  }

  render() {
    return (
      <div className="reservation-flex-container">
        <div className="reservation-search">
          <div className="reservation-search-party">
            <select onChange={this.update('party_size')}>
              {[2,3,4,5,6].map( partySize => (
                <option key={partySize}
                  value={partySize}>{partySize} People</option>
              ))}
            </select>
          </div>
          <div className="reservation-search-date">
            <input type="date" name="dateSlot"
              onChange={this.update('date_slot')}
              value={this.state.date_slot}/>
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
            <button onClick={this.handleTimes()}>Find Reservation</button>
          </div>
        </div>
        {this.state.hideBooker ? <div></div> :
          <ReservationBooker
            createReservation={this.props.createReservation}
            currentUserId={this.props.currentUserId}
            restaurantId={this.props.restaurantId}
            dateSlot={this.state.date_slot}
            availableTimes={this.props.availableTimes}
            fetchTimes={this.props.fetchTimes}/>
        }
      </div>
    );
  }
}

export default ReservationSearch;
