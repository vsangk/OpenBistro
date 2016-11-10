class Reservation < ActiveRecord::Base
  validates :party_size, :time_slot, :date_slot, :user_id, :restaurant_id, presence: true

  belongs_to :user
  belongs_to :restaurant
end
