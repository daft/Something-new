class User < ActiveRecord::Base
    acts_as_authentic
    has_one :dater_profile, :dependent => :destroy
    has_private_messages
end
