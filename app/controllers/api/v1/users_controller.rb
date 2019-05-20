class Api::V1::UsersController < ApplicationController
  def index
    @users = User.includes(:recipes).all
    render json: @users, :include => [:recipes]
  end
end
