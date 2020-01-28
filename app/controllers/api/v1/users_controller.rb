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

    up = user_params
    photo = up.delete(:profile_photo)
    if photo
      url = ImageUploader.upload_image(photo, user_id: @user.id)
      if url
        up[:profile_photo] = url
      end
    end

    @user.update(up)
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :profile_photo, :is_suspended, :is_admin)
  end
end
