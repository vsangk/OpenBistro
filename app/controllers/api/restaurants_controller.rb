class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.where("city_id = #{params[:city_id]}")
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    @reviews = @restaurant.reviews
    @reservations = @restaurant.reservations

    sum_rating = 0
    @reviews.each do |review|
      sum_rating += review.rating
    end

    if @reviews.length == 0
      @avg_rating = 0
    else
      @avg_rating = ((sum_rating.to_f / @reviews.length) * 20).to_i
    end
  end
end
