class UserSessionsController < ApplicationController


    def new
      @user_session = UserSession.new
     
    end
    
    def home
       @user_session = UserSession.new
    end

    def create
      @user_session = UserSession.new(params[:user_session])
      @user_session.crypted_password = "vlashlkjdhfkjhf"
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

