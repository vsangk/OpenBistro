json.set! :reviews do
  json.set! @review.id do
    json.extract! @review, :id, :rating, :body, :user_id, :restaurant_id
  end
end
