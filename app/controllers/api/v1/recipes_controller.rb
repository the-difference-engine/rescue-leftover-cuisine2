class Api::V1::RecipesController < ApplicationController
before_action :authenticate_user!, :except => [:show, :index]

  def show
    @recipe = Recipe.find_by!(id: params[:id])
    render json: @recipe, :include => [{comments: {include: :user }}, :tags]
  end

  def index
    if params[:search]
      @recipes = Recipe.search(params[:search])
    elsif params[:user_id]
      @recipes = Recipe.where(user_id: params[:user_id]).all
    else
      @recipes = Recipe.includes(:user).all
    end
    render json: @recipes.all.order("created_at DESC"), :include => [:user]
  end

  def create
    rp = recipe_params
    tags = rp.delete(:tags)

    @recipe = Recipe.new(rp)
    tags.each do |tag|
      @recipe.tags << Tag.find(tag[:id])
    end

    @recipe.user = current_user
    @recipe.save
    render json: @recipe
  end

  def recipe_params
  params.require(:recipe).permit(:title, :snippet, :difficulty, :duration, :servings, ingredients: [], tags: [:id, :title], directions: [])
  end

end
