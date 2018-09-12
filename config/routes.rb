Rails.application.routes.draw do

  devise_for :admins, :controllers => {:registrations => "registrations"}
  devise_for :users, controllers: { sessions: 'users/sessions' }
  root to: "pages#home"
  get 'hello' => 'users#hello'
  resources :adminviews, only: [:index, :show, :create] do
  end
end



  
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

