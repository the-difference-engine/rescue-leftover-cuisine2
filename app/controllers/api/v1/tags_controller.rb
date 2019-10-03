class TagController < ApplicationController

    def create
        @tag = Tag.new(tag_params)

        @tag.recipes << Tag.find_or_create_by(title: tag_params[:title])

        @tag.recipes.where(title: tag_params[:title]).first_or_create
        # @tag = Tag.find_or_create_by(title: tag_params[:title])
        # params[:recipe_id]

        @tag.recipes.build({title: tag_params[:title]})

        @tag.save
        render json: @tag
    end


    def tag_params
        params.require(:tag).permit(:title)
    end

    end
