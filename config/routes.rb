Rails.application.routes.draw do
  
  resources :bookmarks, only: :index do
    collection do 
      get :favourites
    end
  end
  devise_for :users

  get 'home/index'
  root to: "home#index"
end
