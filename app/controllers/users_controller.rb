class UsersController < ApplicationController

		respond_to :json

		def index
			@users = User.all
			puts json: @users
			render json: {users: @users, message: "successfully submited data from users table"}
		end

		def create
			@user = User.new
		end

		def show
			@user = User.find(params[:id])
			#@user = User.where(id: 15)
			render json: @user
			puts json: @user
		end

		def update
			if params[:user][:password].blank?
			  params[:user].delete(:password)
			  params[:user].delete(:password_confirmation)
			end
		end

		def destroy
			@user = User.find(params[:id])
    		@user.destroy
    		render json: @user, message: "Successfully deleted"
		end 
end