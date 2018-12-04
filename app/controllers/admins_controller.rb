class AdminsController < ApplicationController

		def edit
			@admin = Admin.find(params[:id])
		end

		def passwordchange
			@admin = Admin.find(params[:admin_id])
		end

		private

		def resource_name
			:admin
		end
		helper_method :resource_name

		def resource
			@resource ||= Admin.new
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