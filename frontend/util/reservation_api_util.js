export const createReservation = (reservation, success, error) => {
  $.ajax({
    url: "api/reservations",
    type: "POST",
    data: { reservation },
    success,
    error
  });
};

export const updateReservation = (reservation, success, error) => {
  $.ajax({
    url: `api/reservations/${reservation.id}`,
    type: "PATCH",
    data: { reservation },
    success,
    error
  });
};

export const deleteReservation = (id, success, error) => {
  $.ajax({
    url: `api/reservations/${id}`,
    type: "DELETE",
    success,
    error
  });
};

export const fetchTimes = (reservation, success) => {
  $.ajax({
    url: "api/reservations",
    type: "GET",
    data: { reservation },
    success,
  });
};
