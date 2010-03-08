ActionController::Routing::Routes.draw do |map|

  map.login "login", :controller => "user_sessions", :action => "new"
  map.logout "logout", :controller => "user_sessions", :action => "destroy"
  map.featured "featured", :controller => "dater_profiles", :action=>"get_featured_profile"
  map.resource :user_session
  map.resource :account, :controller => "users"
  map.resources :users
  map.resources :dater_profiles
  
  map.root :controller => "user_sessions", :action => "home" # optional, this just sets the root route
  
  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
