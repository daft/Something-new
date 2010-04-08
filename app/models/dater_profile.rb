class DaterProfile < ActiveRecord::Base
  has_many :profile_images, :dependent => :destroy
  accepts_nested_attributes_for :profile_images, :reject_if => proc { |t| t['photo'].blank?  || t['caption'].blank? }
  belongs_to :user
  #before_save :check_existing
  MOST_RECENT_DATER_ENTRIES = 4


  def self.get_male_featured_profile
    DaterProfile.male_profile_of_the_day
  end
  
  def self.get_female_featured_profile
    DaterProfile.female_profile_of_the_day
  end 

  def self.male_profile_of_the_day
    self.find(:first, :conditions=>["profile_of_the_day AND sex=?","M"])
  end
  
  def self.female_profile_of_the_day
    self.find(:first, :conditions=>["profile_of_the_day AND sex=?","F"])
  end
  
  def self.setup_male_profile_of_the_day
    current_dater_profile = self.male_profile_of_the_day
    current_dater_profile.update_attribute(:listed, true)
    current_dater_profile.update_attribute(:profile_of_the_day, false)
    
        product_ids = self.all(
          :select => "id",
          :conditions => ['!listed AND sex=?',"M"]
        )

        next_product = self.find(product_ids[rand(product_ids.length)])        
        next_product.update_attribute(:profile_of_the_day, true)
    
  end
  
  def self.setup_female_profile_of_the_day
    current_dater_profile = self.female_profile_of_the_day
    current_dater_profile.update_attribute(:listed, true)
    current_dater_profile.update_attribute(:profile_of_the_day, false)
    
        product_ids = self.all(
          :select => "id",
          :conditions => ['!listed AND sex=?',"F"]
        )

        next_product = self.find(product_ids[rand(product_ids.length)])        
        next_product.update_attribute(:profile_of_the_day, true)
  end
  
  def self.most_recent_daters
    @daters = DaterProfile.find(:all, :conditions=> {"listed"=>true}, :limit=>MOST_RECENT_DATER_ENTRIES, :order=>"updated_at DESC")
  end
  
end
