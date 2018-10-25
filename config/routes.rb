Rails.application.routes.draw do
  devise_for :admins, :controllers => {:registrations => "registrations"}
  devise_for :users
  root to: "pages#home"
  get 'hello' => 'users#hello'
  resources :adminviews, only: [:index, :show, :create] do
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
