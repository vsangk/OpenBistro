class Restaurant < ActiveRecord::Base
  validates :name, :address, :city, :state, :zip_code, :category,
    :description, :image_url, :city_id, :price, presence: true
  validates :price, numericality: { greater_than: 0, less_than: 5 }

  belongs_to :city
  has_many :reviews
end
