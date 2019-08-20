Rails.application.routes.draw do
  scope constraints: lambda { |req| req.format == :json } do
    # NOTES: define route for react page here
    resources :employees
  end

  get "about-us", to: "application#index"

  root 'application#index'

  get "*path", to: 'application#index', constraints: lambda { |req| req.format == :html }
end
