module Api
  class MessageController < ApplicationController
    before_action :set_message, only: [:index]

    def index
      render json: @message 
    end

    private
      def set_message
        @message = { message: "Hello" }
      end
  end
end