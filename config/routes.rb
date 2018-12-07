Rails.application.routes.draw do
  
  resources :users

  resources :recipes
  
  namespace :api do
    resources :message
  end

end
