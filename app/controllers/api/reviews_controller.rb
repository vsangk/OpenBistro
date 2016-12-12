class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.where("user_id = #{current_user.id}")
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])

    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])

    if @review.destroy
      render json: @review
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def review_params
    params[:review][:user_id] = current_user.id
    params.require(:review).permit(:rating, :body, :user_id, :restaurant_id)
  end
end
