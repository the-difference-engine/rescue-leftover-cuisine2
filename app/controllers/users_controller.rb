class UsersController < ApplicationController

		def update
			if params[:user][:password].blank?
			  params[:user].delete(:password)
			  params[:user].delete(:password_confirmation)
			end
		end
end