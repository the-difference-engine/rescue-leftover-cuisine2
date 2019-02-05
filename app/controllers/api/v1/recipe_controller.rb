class Api::V1::RecipeController < ApplicationController

  def show
    @recipe = Recipe.find(params[:id])
      ApplicationController::ErrorCheck
      render json: @recipe
  rescue ActiveRecord::RecordNotFound => e
    render json: ApplicationController::RecordNotFound.code, ApplicationController::RecordNotFound.message
  end

  def index
    @recipe = Recipe.all
  end

end