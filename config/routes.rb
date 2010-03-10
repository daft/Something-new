ActionController::Routing::Routes.draw do |map|

  map.with_options :controller => 'static_pages', :action => 'show' do |static_page|
      static_page.faq 'faq', :id => 'faq'
      static_page.about 'about', :id => 'about'
      static_page.privacy 'privacy', :id => 'privacy'
      static_page.contact_us 'contact_us', :id => 'contact_us'
      static_page.terms_and_conditions 'terms_and_conditions', :id => 'terms_and_conditions'
  end
  
  map.login "login", :controller => "user_sessions", :action => "new"
  map.logout "logout", :controller => "user_sessions", :action => "destroy"
  map.featured "featured", :controller => "dater_profiles", :action=>"get_featured_profile"
  map.recent_daters "recent_daters", :controller => "dater_profiles", :action=>"get_recent_daters"
  map.resource :user_session
  map.resource :account, :controller => "users"
  map.resources :users
  map.resources :dater_profiles
  
  map.root :controller => "user_sessions", :action => "home" # optional, this just sets the root route
  
  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
