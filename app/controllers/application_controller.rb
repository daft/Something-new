# Filters added to this controller apply to all controllers in the application.
# Likewise, all the methods added will be available for all controllers.

class ApplicationController < ActionController::Base
  helper :all # include all helpers, all the time
  protect_from_forgery # See ActionController::RequestForgeryProtection for details
 
  # Scrub sensitive parameters from your log
  # filter_parameter_logging :password
  
  filter_parameter_logging :password

  helper_method :current_user, :featured_profile

  private

  def male_featured_profile
    return @male_featured_profile if defined?(@male_featured_profile)
    @male_featured_profile = DaterProfile.get_male_featured_profile
  end
  
  def female_featured_profile
    return @female_featured_profile if defined?(@female_featured_profile)
    @female_featured_profile = DaterProfile.get_female_featured_profile
  end
  

  def current_user_session
    return @current_user_session if defined?(@current_user_session)
    @current_user_session = UserSession.find
  end

  def current_user
    return @current_user if defined?(@current_user)
    @current_user = current_user_session && current_user_session.record
  end

  def require_user
    unless current_user
      #store_location
      flash[:notice] = "You must be logged in to access this page"
      redirect_to login_path
      return false
    end
  end

  def require_no_user
    if current_user
      #store_location
      flash[:notice] = "You must be logged out to access this page"
      redirect_to root_url
      return false
    end
  end
  
end
