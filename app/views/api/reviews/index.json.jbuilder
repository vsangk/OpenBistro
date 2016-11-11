json.set! :reviews do
  @reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :rating, :body, :user_id, :restaurant_id
      json.updated_at review.updated_at.to_date.to_s
    end
  end
end
