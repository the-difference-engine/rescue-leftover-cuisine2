Rails.application.routes.draw do
  
  resources :users

  resources :recipes, param: :name
  
  namespace :api do
    resources :message
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
