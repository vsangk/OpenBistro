class Review < ActiveRecord::Base
  validates :rating, :body, :user_id, :restaurant_id, presence: true
  validates :rating, numericality: { greater_than: 0, less_than: 6 }

  belongs_to :restaurant
  belongs_to :user
end
