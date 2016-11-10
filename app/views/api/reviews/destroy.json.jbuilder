json.set! :reviews do
  json.extract! @review, :id, :rating, :body, :user_id, :restaurant_id
end

restaurant = Restaurant.find(@review.restaurant_id)

reviews = restaurant.reviews
sum_rating = 0
reviews.each do |review|
  sum_rating += review.rating
end

if reviews.length == 0
  @avg_rating = 0
else
  @avg_rating = ((sum_rating.to_f / reviews.length) * 20).to_i
end

json.total_reviews reviews.length
json.avg_rating @avg_rating
