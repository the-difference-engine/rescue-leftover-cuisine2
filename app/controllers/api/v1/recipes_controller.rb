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
    puts recipe_params
    tags = rp.delete(:tags)

    @recipe = Recipe.new(rp)
    tags.each do |tag|
      puts tag
      @recipe.tags << Tag.find(tag["id"])
    end

    @recipe.user = current_user
    @recipe.save
    render json: @recipe
  end

  def recipe_params
    puts params
   params.require(:recipe).permit(:title, :snippet, :difficulty, :duration, :servings, tags: [:id, :title])
  end

end
