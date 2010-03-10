class ProfileImage < ActiveRecord::Base
  #require 'paperclip'
  belongs_to :dater_profile
  has_attached_file :photo, :styles => { :small => "150x150!", :large => "700x518#", :tiny => "15x15#" }, :default_url => '/images/default_avatar.png'
  
  validates_attachment_presence :photo
  validates_attachment_size :photo, :less_than => 5.megabytes
end
