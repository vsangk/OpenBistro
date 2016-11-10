import React from 'react';

class ReservationBooker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      party_size: 2,
      time_slot: 0,
      date_slot: "2016-11-20",
      user_id: this.props.currentUserId,
      restaurant_id: this.props.restaurantId
    };

    // this.state = {
    //   partySize: this.props.partySize,
    //   timeSlot: 0,
    //   dateSlot: this.props.datSlot,
    //   user_id: this.props.currentUserId,
    //   restaurant_id: this.props.restaurantId
    // };

    this.timeSlotButtons = this.timeSlotButtons.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(timeSlot) {
    return (e) => {
      e.preventDefault();
      this.setState({ time_slot: timeSlot });
      console.log(this.state);
      this.props.createReservation(this.state);
    };
  }

  timeSlotButtons() {
    let timeSlots = [5, 6, 7, 8, 9];
    timeSlots = timeSlots.map(timeSlot => (
      <button key={timeSlot}
        onClick={this.handleClick(timeSlot)}>
        {timeSlot}:00 PM
      </button>
    ));
    return timeSlots;
  }

  render() {
    console.log(`booker: ${this.props.restaurantId}`);
    return (
      <div className="reservation-buttons">
        {this.timeSlotButtons()}
      </div>
    );
  }
}

export default ReservationBooker;
