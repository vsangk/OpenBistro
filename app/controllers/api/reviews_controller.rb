class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)

    if @review.save
      render "api/restaurants/#{@review.restaurant_id}"
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])

    if @review.update(review_params)
      render "api/restaurants/#{@review.restaurant_id}"
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])

    if @review.destroy
      render "api/restaurants/#{@review.restaurant_id}"
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def review_params
    params.require(:review).permit(:rating, :body, :user_id, :restaurant_id)
  end
end