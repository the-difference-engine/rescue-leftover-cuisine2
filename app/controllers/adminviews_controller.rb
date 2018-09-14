class AdminviewsController < ApplicationController

	before_action :authenticate_admin!

		def index
			@users = User.all
		end
		def show
			@user = User.find(params[:id])
		end
		def suspend
			@user = User.find(params[:id])
			@user[:suspended_status] = !@user[:suspended_status]
			@user.save
		end
		def byebye
			@user = User.find(params[:id])
			prev_name = @user.user_name
			@user.destroy
			#redirect to informational page saying user has been deleted
		end
		def create
		end

		private

		def resource_name
			:user
		end
		helper_method :resource_name

		def resource
			@resource = User.find(params[:id])
		end
		helper_method :resource

		def devise_mapping
			@devise_mapping ||= Devise.mappings[:user]
		end
		helper_method :devise_mapping

		def resource_class
			User
		end
		helper_method :resource_class
end
