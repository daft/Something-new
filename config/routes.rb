ActionController::Routing::Routes.draw do |map|

  map.static ':page', :controller => 'static_pages', :action => 'show', :page => /privacy|about|contact_us|terms|faq/
  
  map.login "login", :controller => "user_sessions", :action => "new"
  map.logout "logout", :controller => "user_sessions", :action => "destroy"
  map.featured "featured", :controller => "dater_profiles", :action=>"get_featured_profile"
  map.recent_daters "recent_daters", :controller => "dater_profiles", :action=>"get_recent_daters"
  map.resource :user_session
  map.resource :account, :controller => "users"
  map.resources :users
  map.resources :dater_profiles
  
  map.resources :messages, :collection => { :delete_selected => :post }
  map.new_payment "new_payment", :controller =>"payments", :action=>"create"
  
  
  map.root :controller => "user_sessions", :action => "home" # optional, this just sets the root route
  
  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
