Rails.application.routes.draw do
  devise_for :admins
  devise_for :users
  root to: "pages#home"
  resources :admintools, only: [:show] do
  	collection do
  		get :userbase
  	end
  end
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
