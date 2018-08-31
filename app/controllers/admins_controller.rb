class AdminsController < ApplicationController

		def edit
			@admin = Admin.find(params[:id])
		end

		def passwordchange
			@admin = Admin.find(params[:admin_id])
		end
end