json.set! :reservations do
  @reservations.each do |reservation|
    restaurant = Restaurant.find(reservation.restaurant_id)

    json.set! reservation.id do
      json.extract! reservation, :id, :party_size, :time_slot, :date_slot, :user_id, :restaurant_id
      json.restaurant_name restaurant.name
      json.image_url restaurant.image_url
    end
  end
end
