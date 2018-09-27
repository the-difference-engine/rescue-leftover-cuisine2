class SuperadminviewsController < ApplicationController

	before_action :authenticate_admin!

		def index
			@admins = Admin.all
		end
		def show
			@admin = Admin.find(params[:id])
		end
		def create
		end

		private

		def resource_name
			:admin
		end
		helper_method :resource_name

		def resource
			@resource = Admin.find(params[:id])
		end
		helper_method :resource

		def devise_mapping
			@devise_mapping ||= Devise.mappings[:admin]
		end
		helper_method :devise_mapping

		def resource_class
			Admin
		end
		helper_method :resource_class
end