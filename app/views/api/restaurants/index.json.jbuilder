@restaurants.each do |restaurant|
  reviews = restaurant.reviews
  sum_rating = 0
  reviews.each do |review|
    sum_rating += review.rating
  end

  if reviews.length == 0
    avg_rating = 0
  else
    avg_rating = ((sum_rating.to_f / reviews.length) * 20).to_i
  end

  reservations = Reservation.where("restaurant_id = ? AND date_slot = ?",
    restaurant.id, @today)

  available_times = { 5 => true, 6 => true, 7 => true, 8 => true, 9 => true }
  reservations.each do |reservation|
    available_times[reservation.time_slot] = false
  end


  json.set! restaurant.id do
    json.extract! restaurant, :id, :name, :image_url, :neighborhood, :category, :price
    json.available_today available_times
    json.total_reviews reviews.length
    json.avg_rating avg_rating
  end
end
