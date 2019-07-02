class Api::V1::UsersController < ApplicationController
  def index
    @users = User.includes(:recipes).all
    render json: @users, :include => [:recipes]
  end

  def show
    @user = User.find_by!(id: params[:id])
    render json: @user
  end

  # fix this to handle updating of the user data
  def update
    @user = User.find_by(id: params[:id])
    @user.update(user_params)
  end

  # fix this for above (this helps format the data to spit it back into update above)
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :is_suspended)
  end
end
