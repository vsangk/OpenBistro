@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.extract! restaurant, :id, :name, :image_url, :neighborhood, :category, :price
  end
end
