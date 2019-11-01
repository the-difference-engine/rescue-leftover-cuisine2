class Api::V1::TagsController < ApplicationController

  def index
    if params[:recipe_id]
      @tags = Recipe.find_by!(id: params[:recipe_id]).tags
    else
      @tags = Tag.all
    end

    render json: @tags
  end

  def create
    @tag = Tag.new(tag_params)
    @tag.save

    render json: @tag
  end

  private

  def tag_params
    params.require(:tag).permit(:title)
  end

end
