class StoriesController < ApplicationController
  
  def new
    @story = Story.new
  end
  
 
  
  def create
    @story = Story.new(params[:story])
    if @story.save
      flash[:notice] = "Story created."
      redirect_to :action=>'show', :id=> @story.id
    else
      render :action => 'new'
    end
  end

  def edit
    @story = Story.find(params[:id])
  end

  def update
    @story = Story.find(params[:id])
    if @story.update_attributes(params[:story])
      flash[:notice] = "Successfully updated story."
      redirect_to root_url
    else
      render :action => 'edit'
    end
  end
  
  def add_paragraph
  end
  
  def show
    logger.debug(params[:id])
    @story = Story.find(params[:id])
    @pg = Paragraph.new
    @pg.story = @story
    @pgs = @story.paragraphs
  end
  
  def deliver
    @story = Story.find(params[:user_mailer][:story_id])
    UserMailer.deliver_invite_email(@story, params[:user_mailer][:recipient], params[:user_mailer][:sender])
    redirect_to :action=>'show', :id=> @story.id
  end
end
