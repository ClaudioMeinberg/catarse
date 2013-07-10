class Contact < ActiveRecord::Base
  attr_accessible :email, :firstname, :lastname, :message, :sports
end
