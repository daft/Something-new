class ParagraphsController < ApplicationController

 def create  
     @pg = Paragraph.create!(params[:paragraph])  
     flash[:notice] = "Paragraph added!"  
     respond_to do |format|  
       format.html { redirect_to @pg.show }  
       format.js  
     end  
   end
end
