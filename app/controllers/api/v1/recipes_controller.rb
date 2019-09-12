class Api::V1::RecipesController < ApplicationController

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

  def create
    @recipes = Recipe.new(recipe_params)
  end

  def recipe_params
   params.require(:recipes).permit(:title, :description, :difficulty, :duration, :servings )
  end

end


