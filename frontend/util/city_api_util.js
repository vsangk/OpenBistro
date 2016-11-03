export const fetchAllCities = success => {
  $.ajax({
    type: 'GET',
    url: 'api/cities',
    success
  });
};
