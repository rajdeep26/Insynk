Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'pages#home'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :issues, only: [:index, :show, :create, :update, :destroy]
    end
  end
end
