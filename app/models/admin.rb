class Admin < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  #note that in current formulation, email uniqueness
  #only applies to users and admins individually
  #and does not prevent a single email from being connected
  #to both a user and an admin
  validates	:email, uniqueness: true
end
