json.extract! @restaurant, :id, :name, :image_url, :category, :price, :address,
  :city_name, :neighborhood, :state, :zip_code, :description, :detail_image_url
json.total_reviews @reviews.length
json.avg_rating @avg_rating

json.set! :reviews do
  @reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :rating, :body, :user_id, :restaurant_id
      json.username User.find(review.user_id).username
      json.updated_at review.updated_at.to_date.to_s
    end
  end
end

json.set! :reservations do
  @reservations.each do |reservation|
    json.set! reservation.id do
      json.extract! reservation, :id, :party_size, :time_slot, :date_slot,
        :user_id, :restaurant_id
    end
  end
end
