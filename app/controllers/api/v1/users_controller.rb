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

  def update_password
    @user = current_user
    if @user.update(user_params)
      # Sign in the user by passing validation in case their password changed
      bypass_sign_in(@user)
      redirect_to root_path
    else
      render "edit"
    end
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :is_suspended, :password, :password_confirmation)
  end
end
