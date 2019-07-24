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

  def active_for_authentication?
    super && !is_suspended
  end

  def inactive_message
    is_suspended ? 'Your account is suspended' : super
  end

  has_many :recipes
end
