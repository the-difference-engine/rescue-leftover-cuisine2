Rails.application.routes.draw do
  devise_for :users,
             path: 'api/v1',
             path_names: {
               sign_in: 'auth/login',
               sign_out: 'auth/logout',
               registration: 'auth',
             },
             controllers: {
               registrations: 'api/v1/registrations',
               passwords: 'api/v1/passwords',
             },
             defaults: {
               format: :json
             }

  namespace :api do
    namespace :v1 do
      
      resources :recipes
      resources :users

      devise_scope :user do
        put '/confirms', to: "confirmations#create"
        authenticate :user do
          get '/auth', to: 'registrations#show'
          
        end
      end
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
