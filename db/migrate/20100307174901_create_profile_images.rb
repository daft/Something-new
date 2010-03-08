class CreateProfileImages < ActiveRecord::Migration
  def self.up
    create_table :profile_images do |t|
      t.string :caption
      t.text :description
      t.integer :dater_profile_id
      t.timestamps
    end
  end

  def self.down
    drop_table :profile_images
  end
end
