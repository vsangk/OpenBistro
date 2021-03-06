Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :cities, only: [:index]
    resources :restaurants, only: [:index, :show]
    resources :reviews, only: [:create, :index, :update, :destroy]
    resources :reservations, only: [:create, :index, :update, :destroy]
  end
end
