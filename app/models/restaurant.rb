class Restaurant < ActiveRecord::Base
  validates :name, :address, :city, :state, :zip_code, :category,
    :description, :image_url, :city_id, presence: true

  belongs_to :city
end
