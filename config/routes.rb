ActionController::Routing::Routes.draw do |map|

  map.static ':page', :controller => 'static_pages', :action => 'show', :page => /privacy|about|contact_us|terms|faq/
  
  map.login "login", :controller => "user_sessions", :action => "new"
  map.logout "logout", :controller => "user_sessions", :action => "destroy"
  map.resource :user_session
  map.resource :account, :controller => "users"
  map.resources :users
  
  map.resources :stories, :paragraphs,:emailers
  
  
  map.root :controller => "user_sessions", :action => "home" 
  
  
  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
