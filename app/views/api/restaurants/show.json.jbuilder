json.extract! @restaurant, :name, :image_url, :category, :price, :address,
  :city_name, :neighborhood, :state, :zip_code, :description

json.set! :reviews do
  @reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :rating, :body, :user_id, :restaurant_id
    end
  end
end
