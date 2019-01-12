Rails.application.routes.draw do
  devise_for :users,
             path: 'api/v1',
             path_names: {
                sign_in: 'auth/login',
                sign_out: 'auth/logout',
                registration: 'user'
             },
             defaults: {
               format: :json
             }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
