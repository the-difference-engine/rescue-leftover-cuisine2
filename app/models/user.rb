class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  # Also include setup for devise-jwt-based authentication

  validates_uniqueness_of :email

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :confirmable, :jwt_authenticatable,
         jwt_revocation_strategy: JWTBlacklist

  def skip_confirmation_method
    self.skip_confirmation!
  end

  def active_for_authentication?
    super && !is_suspended
  end

  def inactive_message
    is_suspended ? :is_suspended : super
  end

  def self.authenticate(email, password)
    user = find_by_email(email)
    if user && user.password_hash == BCrypt::Engine.hash_secret(password, user.password_salt)
      user
    else
      nil
    end
  end

  has_many :recipes
  has_many :comments
end
