@cities.each do |city|
  json.set! city.id do
    json.extract! city, :id, :name, :image_url
    json.num_of_restaurants Restaurant.where("city_id = #{city.id}").count
  end
end
