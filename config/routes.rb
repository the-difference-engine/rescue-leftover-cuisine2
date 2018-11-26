Rails.application.routes.draw do
  devise_for :admins, :controllers => {:registrations => "admin_registrations"}
  devise_for :users, :controllers => {:registrations => "user_registrations"}

  resources :users
  

  scope "/superadminviews" do
    resources :admins
  end
  root to: "pages#home"
  get 'hello' => 'users#hello'
  resources :admins do
  	get 'passwordchange'
  end
  namespace :adminportal do
    resources :adminviews, :superadminviews
  end
  get 'adminportal/adminviews/:id/suspend', to: 'adminportal/adminviews#suspend'
  get 'adminportal/adminviews/:id/delete', to: 'adminportal/adminviews#delete'
  get 'adminportal/superadminviews/:id/suspend', to: 'adminportal/superadminviews#suspend'

  namespace :api do
    resources :message
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
