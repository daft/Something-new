class DaterProfilesController < ApplicationController
  before_filter :require_user, :only => [:new, :create]
  
  
  def new
    @dp = DaterProfile.new
    5.times {@dp.profile_images.build} # added this
  end
  
  
  def create
    @dp = DaterProfile.new(params[:dater_profile])
    if @dp.save
      flash[:notice] = "Registration successful."
      redirect_to root_url
    else
      render :action => 'new'
    end
  end




  

  
end
