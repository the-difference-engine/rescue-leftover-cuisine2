class Api::V1::RecipeController < ApplicationController

  def show
    @recipe = Recipe.find_by!(id: params[:id])
    render json: @recipe
  end

  def index
    if params[:search]
      @recipes = Recipe.search(params[:search])
    else
      @recipes = Recipe.includes(:user).all
    end
      render json: @recipes, :include => [:user]
  end
end