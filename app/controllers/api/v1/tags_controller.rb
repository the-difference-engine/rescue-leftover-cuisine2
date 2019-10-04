class TagController < ApplicationController

    def index
        if params[:search]
            @tags = Tag.search(params[:search])
        else
          @tags = Tag.all
        end
          render json: @tag
      end


    
    # def tag_params
    #     params.require(:tag).permit(:title)
    # end
    
    end