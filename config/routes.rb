Rails.application.routes.draw do
  devise_for :users,
             path: 'api/v1',
             path_names: {
               sign_in: 'auth/login',
               sign_out: 'auth/logout',
               registration: 'user'
             },
             controllers: {
               registrations: 'api/v1/registrations'
             },
             defaults: {
               format: :json
             }
             
  namespace :api do
    namespace :v1 do
      resources :recipe
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
