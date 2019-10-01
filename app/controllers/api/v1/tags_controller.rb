class TagController < ApplicationController

    def create
        @tag = Tag.new(tag_params)
        #@tag = Tag.find_or_create_by(title: tags_params[:title])
        #params[:recipe_id]
        
        @tag.save
        render json: @tag
    end
 
    
    def tag_params
        params.require(:tag).permit(:title)
    end
    
    end