task :cron => :environment do

if Time.now.hour == 0
  DaterProfile.setup_male_profile_of_the_day
  DaterProfile.setup_female_profile_of_the_day
end