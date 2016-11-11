require "date"

class Api::ReservationsController < ApplicationController
  def create
    @reservation = Reservation.new(reservation_params)

    if @reservation.save
      render text: @reservation.time_slot
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def index
    # Test
    restaurant = Restaurant.find(params[:reservation][:restaurant_id])
    reservations = restaurant.reservations
    @available_times = { 5 => true, 6 => true, 7 => true, 8 => true, 9 => true }

    reservations.each do |reservation|
      if Date.parse(params[:reservation][:date_slot]) == reservation.date_slot
        @available_times[reservation.time_slot] = false
      end
    end
    # Test

    render json: { "available_times" => @available_times }
  end

  def update
    @reservation = Reservation.find(params[:id])

    if @reservation.update(reservation_params)
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def destroy
    @reservation = Reservation.find(params[:id])

    if @reservation.destroy
      render json: @reservation
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def reservation_params
    params[:reservation][:date_slot] = Date.parse(params[:reservation][:date_slot])
    params.require(:reservation).permit(:party_size, :time_slot, :date_slot, :user_id, :restaurant_id)
  end
end
