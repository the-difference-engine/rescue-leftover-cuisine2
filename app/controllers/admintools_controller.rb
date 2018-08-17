class AdmintoolsController < ApplicationController

	before_action :authenticate_admin!

		def userbase
			@users = User.all
		end
end
