Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  namespace :api do
    namespace :v1 do
        resources :workouts, only: [:index, :create, :destroy, :update]
    end
  end 

end
