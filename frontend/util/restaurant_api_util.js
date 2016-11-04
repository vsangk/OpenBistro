export const fetchAllRestaurants = (cityId, success) => {
  $.ajax({
    type: 'GET',
    url: 'api/restaurants',
    data: { city_id: cityId },
    success
  });
};

export const fetchRestaurantDetail = (restaurantId, success) => {
  $.ajax({
    type: 'GET',
    url: `api/restaurants/${restaurantId}`,
    success
  });
};
