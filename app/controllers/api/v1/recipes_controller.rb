class Api::V1::RecipesController < ApplicationController
  before_action :authenticate_user!, :except => [:show, :index]

  def show
    @recipe = Recipe.find_by!(id: params[:id])
    render json: @recipe, :include => [{comments: {include: :user }}, :tags]
  end

  def index
    puts params
    if params[:search]
      @recipes = Recipe.search(params[:search]).paginate(:page => params[:page], :per_page => 20)
    elsif params[:user_id]
      @recipes = Recipe.where(user_id: params[:user_id]).all
    else
      @recipes = Recipe.includes(:user).paginate(:page => params[:page], :per_page => 20)
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

  def update
    rp = recipe_params
    tags = rp.delete(:tags)

    @recipe = Recipe.find_by!(id: params[:id])
    db_tags = []
    tags.each do |tag|
      db_tags << Tag.find(tag[:id])
    end

    @recipe.tags = db_tags
    @recipe.update(rp)
  end

  def destroy
    return head(:forbidden) unless current_user.is_admin
    @recipe = Recipe.find(params[:id])
    if @recipe
      @recipe.destroy
    end
  end

  def recipe_params
    params.require(:recipe).permit(:title, :snippet, :difficulty, :duration, :servings, ingredients: [], tags: [:id, :title], directions: [])
  end

end
