class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  # Also include setup for devise-jwt-based authentication
  
  validates_uniqueness_of :email
  # after_create :confirm
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :confirmable, :jwt_authenticatable,
         jwt_revocation_strategy: JWTBlacklist

  before_create :skip_conformation_method
  def skip_conformation_method
    self.skip_confirmation!
  end
end
