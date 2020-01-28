class Api::V1::UsersController < ApplicationController
  def index
    @users = User.includes(:recipes).all
    render json: @users, :include => [:recipes]
  end

  def show
    @user = User.find_by!(id: params[:id])
    render json: @user
  end

  def update
    @user = User.find_by!(id: params[:id])
    @user.update(user_params)
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :profile_photo, :is_suspended, :is_admin)
  end
end
