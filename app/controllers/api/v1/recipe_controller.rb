class Api::V1::RecipeController < ApplicationController

  def show
    @recipe = Recipe.find_by!(id: params[:id])
    render json: @recipe
  end

  def index
    if
      
    else
      @recipes = Recipe.all
    end
    render json: @recipes
  end

end