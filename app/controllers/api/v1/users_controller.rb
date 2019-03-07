class Api::V1::UsersController < ApplicationController
    before_action :authentication_required
    skip_before_action :authentication_required, only: [:new, :create]
  
    def create
        @user = User.new(user_params)
        if @user.save
            render json:@user
            #should then go to the registrations controller
        else
            @errors = @user.errors.full_messages
            render json:@errors
        end
    end

    def show
    end

    def update
    end
   
    private

        def user_params
            params.require(:user).permit(:username, :first_name, :last_name, :interests, :email, :password, :profile_photo, :is_admin)
        end

end