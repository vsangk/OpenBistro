@restaurants.each do |restaurant|
  @reviews = restaurant.reviews
  sum_rating = 0
  @reviews.each do |review|
    sum_rating += review.rating
  end

  if @reviews.length == 0
    @avg_rating = 0
  else
    @avg_rating = ((sum_rating.to_f / @reviews.length) * 20).to_i
  end


  json.set! restaurant.id do
    json.extract! restaurant, :id, :name, :image_url, :neighborhood, :category, :price
    json.total_reviews @reviews.length
    json.avg_rating @avg_rating
  end
end
