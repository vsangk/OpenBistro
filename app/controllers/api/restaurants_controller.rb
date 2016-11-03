class Api::RestaurantsController < ApplicationController
  def index
    debugger
    @restaurants = Restaurant.where("city_id = #{params[:city_id]}")
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end
end
