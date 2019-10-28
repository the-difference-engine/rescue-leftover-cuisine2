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
    @tags = Tag.new(tag_params)

    @tags.save
    render json: @tags
    
  end

end



def tag_params
  params.require(:tags).permit(:title)
 end