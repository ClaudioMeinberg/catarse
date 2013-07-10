class Contact < ActiveRecord::Base
  attr_accessible :email, :firstname, :lastname, :message, :sports
  validates_presence_of :firstname
  validates_presence_of :lastname
  validates_presence_of :email
  validates_presence_of :message
end
