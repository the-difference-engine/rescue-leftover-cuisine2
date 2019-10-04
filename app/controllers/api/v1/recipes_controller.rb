class Api::V1::RecipesController < ApplicationController
  before_action :authenticate_user!, :except => [:show, :index]

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
    rp = recipe_params
    tags = rp.delete(:tags)
    @recipe = Recipe.new(rp)

    # @recipe = Recipe.new(recipe_params)
    @recipe.user = current_user

    @recipe.tag_ids = tags
    
    @recipe.save  
    render json: @recipe
  end

  def recipe_params
   params.require(:recipe).permit(:title, :snippet, :difficulty, :duration, :servings )
  end

end