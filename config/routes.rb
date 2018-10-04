Rails.application.routes.draw do
  devise_for :admins, :controllers => {:registrations => "admin_registrations"}
  devise_for :users, :controllers => {:registrations => "user_registrations"}
  scope "/adminviews" do
  	resources :users
  end
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
end



  
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

