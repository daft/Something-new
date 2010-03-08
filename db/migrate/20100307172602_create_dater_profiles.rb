class CreateDaterProfiles < ActiveRecord::Migration
  def self.up
    create_table :dater_profiles do |t|
      t.string :first_name
      t.string :last_name
      t.string :twitter
      t.string :facebook_url
      t.string :myspace_url
      t.integer :age
      t.string :height
      t.string :weight
      t.string :hair_color
      t.string :eye_color
      t.string :sex
      t.integer :user_id
      t.text :about_me
      t.date :birth_date
      t.boolean :listed
      t.boolean :profile_of_the_day, :default=>false
      t.timestamps
    end
  end

  def self.down
    drop_table :dater_profiles
  end
end
