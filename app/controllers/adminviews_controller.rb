class AdminviewsController < ApplicationController

	before_action :authenticate_admin!

		def index
			@users = User.all
		end
		def show
			@user = User.find(params[:id])
		end
		def create
		end
end
