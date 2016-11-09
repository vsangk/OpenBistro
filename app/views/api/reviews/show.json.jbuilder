json.set! :reviews do
  json.set! @review.id do
    json.extract! @review, :id, :rating, :body, :user_id, :restaurant_id
    json.username User.find(@review.user_id).username
    json.updated_at @review.updated_at.to_date.to_s
  end
end
