class RecipesController < ApplicationController

		respond_to :json

		def index
			@recipes = Recipe.all
			puts json: @recipes
			render json: {recipes: @recipes, message: "successfully submited data from recipes table"}
		end

		def show
			@recipe = Recipe.find(params[:id])
			render json: @recipe
			puts json: @recipe
		end

end