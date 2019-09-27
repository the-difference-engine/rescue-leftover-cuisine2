class Api::V1::CommentsController < ApplicationController
    before_action :authenticate_user!, :except => [:show, :index]
    
    def index
        @comments = Comment.all
    end

    def show
      @comment = Comment.find_by!(id: params[:id])
      render json: @comment
    end
    
    def create
      @comment = Comment.new(comment_params)
      @comment.user = current_user
      @comment.save
      render json: @comment
    end

    def comment_params
      params.require(:comment).permit(:body)
    end

  end