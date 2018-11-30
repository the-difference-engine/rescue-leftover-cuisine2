class UsersController < ApplicationController

		respond_to :json

		def index
			@users = User.all
			puts json: @users
			render json: {users: @users, message: "successfully submited data from users table"}
		end

		def new
			@user = User.new
		end

		def create
			@user = User.new(user_params)

			if (@user.save(user_params))
				render json: @user
				redirect_to json: @user
			else
				puts "did not create"
			end
		end

		def show
			@user = User.find(params[:id])
			#@user = User.where(id: 15)
			render json: @user
			puts json: @user
		end

		def update
			@user = User.find(params[:id])
			if(@user.update(user_params))
				render json: @user
			else
				render message: "did not update"
			end

=begin
			if params[:user][:password].blank?
			  params[:user].delete(:password)
			  params[:user].delete(:password_confirmation)
			end
=end
		end

		def destroy
			@user = User.find(params[:id])
    		@user.destroy
    		render json: @user, message: "Successfully deleted"
		end 

		private def user_params
		params.permit(:user, :email, :user_name, :first_name, :last_name, :password, :password_confirmation)
		end
end