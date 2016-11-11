import React from 'react';
import { Link, hashHistory } from 'react-router';
import { starRating } from '../misc/stars';

const ReservationItem = ({ reservation, deleteReservation }) => {
  let reservationStyle = {backgroundImage: `url(${reservation.image_url})`};

  const handleDelete = id => {
    return e => {
      e.preventDefault();
      if (confirm("Delete your review?") === true) {
        deleteReservation(id);
      }
    };
  };

  return (
    <div className="reservation-item">
      <Link to={`/restaurant/${reservation.restaurant_id}`}
        style={reservationStyle} className="reservation-pic" />
        <div className="reservation-content">
          <div className="reservation-title">
            <Link to={`/restaurant/${reservation.restaurant_id}`}>
              {reservation.restaurant_name}
            </Link>
          </div>

          <div className="reservation-details">
            <ul>
              <li>Party Size: {reservation.party_size}</li>
              <li>Date: {reservation.date_slot}</li>
              <li>Time: {reservation.time_slot}:00 PM</li>
            </ul>
            <button onClick={handleDelete(reservation.id)}>Cancel Your Reservation</button>
          </div>
        </div>
    </div>
  );
};

export default ReservationItem;
