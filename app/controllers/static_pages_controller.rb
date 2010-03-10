class StaticPagesController < ApplicationController

  def show
    page = params[:id]
    render :template => "static_pages/#{params[:id]}"
  end

end