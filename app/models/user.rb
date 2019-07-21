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

  # def destroy
  #   update_attributes(suspended: true) unless suspended
  # end

  def active_for_authentication?
    super && !suspended
  end

  def inactive_message
    'Your account is suspended. Please contact an administrator for assistance.'
  end

  has_many :recipes
end
