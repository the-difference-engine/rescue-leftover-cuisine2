class AdmintoolsController < ApplicationController

	before_action :authenticate_admin!

		def show
			@user = User.find(params[:id])
		end

		def userbase
			@users = User.all
		end
end
