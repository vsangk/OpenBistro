import React from 'react';

class ReservationBooker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time_slot: 0,
      party_size: this.props.partySize,
      date_slot: this.props.dateSlot,
      user_id: this.props.currentUserId,
      restaurant_id: this.props.restaurantId
    };

    this.timeSlotButtons = this.timeSlotButtons.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(timeSlot) {
    return (e) => {
      e.preventDefault();
      this.setState({ time_slot: timeSlot }, () => {
        this.props.createReservation(this.state);
      });
    };
  }

  timeSlotButtons() {
    let timeSlots = [5, 6, 7, 8, 9];
    timeSlots = timeSlots.map(timeSlot => {
      if (this.props.availableTimes[timeSlot]) {
        return (
          <button key={timeSlot} onClick={this.handleClick(timeSlot)}
            className="time-slot-active">
            {timeSlot}:00 PM
          </button>
        );
      } else {
        return (
          <button key={timeSlot} className="time-slot-inactive">
            Booked
          </button>
        );
      }
    });
    return timeSlots;
  }

  render() {
    return (
      <div className="reservation">
        <p>Available Time Slots for {this.props.dateSlot}</p>
        <div className="reservation-button-container">
          {this.timeSlotButtons()}
        </div>
      </div>
    );
  }
}

export default ReservationBooker;
