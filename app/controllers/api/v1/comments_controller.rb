class Api::V1::CommentsController < ApplicationController
    before_action :authenticate_user!, :except => [:show, :index]
    
    def index
        @comments = Comment.find(params[:recipe_id])
        render json: @comments
    end
    
    def create
      @comment = Comment.new(comment_params)
      @comment.user = current_user
      @comment.recipe_id = params[:recipe_id]
      @comment.save
      render json: @comment
    end

    def comment_params
      params.require(:comment).permit(:body)
    end

  end