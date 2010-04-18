class UserMailer < ActionMailer::Base
  def invite_email(story, recipient, sender)
    recipients recipient
    from  sender
    subject "invite to contribute"
    body    :story => story
  end  

end
