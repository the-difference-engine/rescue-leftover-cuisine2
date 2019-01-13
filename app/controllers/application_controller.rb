class ApplicationController < ActionController::API
  include ActionController::MimeResponds

  before_action :configure_permitted_parameters, if: :devise_controller?
  respond_to :json

  protected

  def user_fields
    return [:username, :first_name, :last_name, :profile_photo, :interests]
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: user_fields)
    devise_parameter_sanitizer.permit(:account_update, keys: user_fields)
  end
end
