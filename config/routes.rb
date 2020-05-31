Rails.application.routes.draw do
  root 'top#index'
  resources :top,only: [:new,:create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :jikancafe, only: :index

end
