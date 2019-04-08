class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  # Also include setup for devise-jwt-based authentication
  
  validates_uniqueness_of :email

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :confirmable, :jwt_authenticatable,
         jwt_revocation_strategy: JWTBlacklist

  before_create :skip_confirmation_method

  def skip_confirmation_method
    self.skip_confirmation!
  end
end
