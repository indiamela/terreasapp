Rails.application.routes.draw do
  get 'top/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :jikancafe, only: [:index]
  resources :top, only: [:index]

end
