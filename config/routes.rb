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
               confirmations: 'api/v1/confirmations'
             },
             defaults: {
               format: :json
             }

  namespace :api do
    namespace :v1 do
      resources :recipes do
        resources :tags, only: [:index]
        resources :comments
      end
<<<<<<< HEAD
      resources :users
=======
      resources :users do
        resources :recipes, only: [:index]
      end
>>>>>>> ac28029caf8c833015d84decb96087edc0bfcebf
      resources :tags, only: [:index, :create]

      devise_scope :user do
        authenticate :user do
          get '/auth', to: 'registrations#show'
        end
      end
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
