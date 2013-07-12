class ContactMailer < ActionMailer::Base  
  def email_contact(contact)
    @contact = contact
    mail(:to => "#{::Configuration[:company_name]} <#{::Configuration[:email_system]}>", :subject => "Fanfuel Contact")
  end
end
