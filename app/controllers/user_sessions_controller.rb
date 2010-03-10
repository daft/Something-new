class UserSessionsController < ApplicationController


    def new
      @user_session = UserSession.new
     
    end
    
    def home
       @male_profile = male_featured_profile
       @female_profile = female_featured_profile
       @recent_daters = DaterProfile.most_recent_daters
    end

    def create
      @user_session = UserSession.new(params[:user_session])
      if @user_session.save
        flash[:notice] = "Login successful!"
        redirect_to root_url
      else
        render :action => :new
      end
    end

    def destroy
      current_user_session.destroy
      flash[:notice] = "Logout successful!"
      redirect_to root_url
    end
  end

