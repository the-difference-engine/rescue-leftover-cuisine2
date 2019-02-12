class Api::V1::RecipeController < ApplicationController

  def show
    @recipe = Recipe.find_by!(id: params[:id])
    render json: @recipe
  end

  def index
    if params[:search]
      @recipes = PgSearch.multisearch(params[:search]).all
    else
      @recipes = Recipe.all
    end
    render json: @recipes
  end

end