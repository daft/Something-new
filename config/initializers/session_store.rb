# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_dateaday_session',
  :secret      => 'b2a5e439f7ec0d1b4bfedc03287144809c8cba6ce8a511d79b8081becb37cb0b87bfcce33e206a446d8a6daebeea723c32e2584345251202913215626f6964b3'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
