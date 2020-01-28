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
    photo = rp.delete(:photo)

    @recipe = Recipe.new(rp)
    tags.each do |tag|
      @recipe.tags << Tag.find(tag[:id])
    end

    if photo
      url = ImageUploader.upload_image(photo, recipe_id: @recipe.id)
      if url
        @recipe.photo = url
      end
    end

    @recipe.user = current_user
    @recipe.save
    render json: @recipe
  end

  def update
    rp = recipe_params
    tags = rp.delete(:tags)
    photo = rp.delete(:photo)

    @recipe = Recipe.find_by!(id: params[:id])
    db_tags = []
    tags.each do |tag|
      db_tags << Tag.find(tag[:id])
    end

    if photo
      url = ImageUploader.upload_image(photo, recipe_id: @recipe.id)
      if url
        rp[:photo] = url
      end
    end

    @recipe.tags = db_tags
    @recipe.update(rp)
  end

  def recipe_params
    params.require(:recipe).permit(:title, :snippet, :difficulty, :duration, :servings, :photo, ingredients: [], tags: [:id, :title], directions: [])
  end

end
