class Api::V1::RecipeController < ApplicationController

  def show
    @recipe = Recipe.find_by!(id: params[:id])
    render json: @recipe
  end

  def index
    if params[:search]
      @recipes = Recipe.search_by_keyword(params[:search])
    else
      @recipes = Recipe.all
    
      recipes_with_user = @recipes.map do |recipe|
        recipe_attributes = recipe.attributes
        recipe_attributes[:user_name] = "#{recipe.user.first_name}  #{recipe.user.last_name}"
        recipe_attributes 
      end

      render json: recipes_with_user
    end
  end
end