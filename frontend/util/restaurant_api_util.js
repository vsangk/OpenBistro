export const fetchAllRestaurants = (cityId, success) => {
  $.ajax({
    type: 'GET',
    url: 'api/restaurants',
    data: { city_id: cityId },
    success
  });
};
