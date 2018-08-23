class ApplicationController < ActionController::Base
    protect_from_forgery
    prepend_view_path Rails.root.join("frontend")


    before_action :configure_permitted_parameters, if: :devise_controller?

 protected

  	def configure_permitted_parameters
	  devise_parameter_sanitizer.permit(:sign_up) do |user_params|
	    user_params.permit(:user_name, :first_name, :last_name, :email, :profile_photo, :interests, :password)
	  end
	  devise_parameter_sanitizer.permit(:account_update, keys: [:user_name, :first_name, :last_name, :email, :profile_photo, :interests, :password])
	end 	

end
