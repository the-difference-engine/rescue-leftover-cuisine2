Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions' }
  root to: "pages#home"

  get 'hello' => 'users#hello'
end



  
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

