Rails.application.routes.draw do
  
  resources :users

  resources :recipes, param: :name
  
  namespace :api do
    resources :message
  end

end
