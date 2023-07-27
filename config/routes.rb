Rails.application.routes.draw do
  get 'student/index'
  root 'courses#index'
  get 'about', to: 'pages#about'
  get '/courses/new', to: 'courses#new'
  resources :students  ,except: [:destroy]
end
