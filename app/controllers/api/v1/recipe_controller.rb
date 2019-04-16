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
    attributes = recipe.attributes
    attributes[:user_name] = recipe.user.first_name + ' ' + recipe.user.last_name
    attributes 

    end
    render json: recipes_with_user
  end

end
end