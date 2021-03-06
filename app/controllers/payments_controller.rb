class PaymentsController < ApplicationController
    ActiveMerchant::Billing::Base.mode = :test
    include ActiveMerchant::Billing::Integrations
    
    def create
     @user = current_user
    end
    
  
    def notify
        notify = Paypal::Notification.new(request.raw_post)
        #enrollment = Enrollment.find(notify.item_id)

        if notify.acknowledge
          @payment = Payment.find_by_confirmation(notify.transaction_id) ||
            enrollment.invoice.payments.create(:amount => notify.amount,
              :payment_method => 'paypal', :confirmation => notify.transaction_id,
              :description => notify.params['item_name'], :status => notify.status,
              :test => notify.test?)
          begin
            if notify.complete?
              @payment.status = notify.status
            else
              logger.error("Failed to verify Paypal's notification, please investigate")
            end
          rescue => e
            @payment.status = 'Error'
            raise
          ensure
            @payment.save
          end
        end
        render :nothing => true
      end
      
end
