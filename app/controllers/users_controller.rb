class UsersController < ApplicationController

		respond_to :json

		def index
			@users = User.all
			puts json: @users
			render json: {data: @users, message: "print users table"}
		end

		def update
			if params[:user][:password].blank?
			  params[:user].delete(:password)
			  params[:user].delete(:password_confirmation)
			end
		end

		def show
			@user = User.find(params[:id])
			render json: @user
			puts json: @user
		end
end