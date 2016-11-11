require 'date'

class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.where("city_id = #{params[:city_id]}")
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    @reviews = @restaurant.reviews
    @reservations = @restaurant.reservations

    # send available times over but how can I receive date from here
    # try dispatching an action from reservation search submit
    # index page will use current date for times

    # Test
    @available_times = { 5 => true, 6 => true, 7 => true, 8 => true, 9 => true }

    # if params[:reservation]
    #   @reservations.each do |reservation|
    #     if Date.parse(params[:reservation][:date_slot]) == reservation.date_slot
    #       @available_times[reservation.time_slot] = false
    #     end
    #   end
    # end
    # Test

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
