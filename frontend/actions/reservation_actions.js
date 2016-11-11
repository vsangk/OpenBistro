export const REQUEST_ALL_RESERVATIONS = "REQUEST_ALL_RESERVATIONS";
export const RECEIVE_ALL_RESERVATIONS = "RECEIVE_ALL_RESERVATIONS";
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
export const CREATE_RESERVATION = 'CREATE_RESERVATION';
export const UPDATE_RESERVATION = 'UPDATE_RESERVATION';
export const DELETE_RESERVATION = 'DELETE_RESERVATION';
export const FETCH_TIMES = 'FETCH_TIMES';
export const RECEIVE_TIME_SLOT = 'RECEIVE_TIME_SLOT';

export const requestAllReservations = () => ({
  type: REQUEST_ALL_RESERVATIONS
});

export const receiveAllReservations = reservations => ({
  type: RECEIVE_ALL_RESERVATIONS,
  reservations
});

export const removeReservation = reservation => ({
  type: REMOVE_RESERVATION,
  reservation
});

export const createReservation = reservation => ({
  type: CREATE_RESERVATION,
  reservation
});

export const updateReservation = reservation => ({
  type: UPDATE_RESERVATION,
  reservation
});

export const deleteReservation = id => ({
  type: DELETE_RESERVATION,
  id
});

export const fetchTimes = reservation => ({
  type: FETCH_TIMES,
  reservation
});

export const receiveTimeSlot = timeSlot => ({
  type: RECEIVE_TIME_SLOT,
  timeSlot
});
