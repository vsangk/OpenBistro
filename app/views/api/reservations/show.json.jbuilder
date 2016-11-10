json.set! :reservations do
  json.set! @reservation.id do
    json.extract! @reservation, :id, :party_size, :time_slot, :date_slot, :user_id, :restaurant_id
  end
end
