class Api::V1::TagsController < ApplicationController

  def index
    if params[:recipe_id]
      @tags = Recipe.find_by!(id: params[:recipe_id]).tags
    else
      @tags = Tag.all
    end
    render json: @tags
  end
end