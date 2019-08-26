class ApplicationController < ActionController::API
  include ActionController::MimeResponds
  respond_to :json
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  def record_not_found
    render json: {
      errors: [
        {
          title: 'Not Found',
          message: "We couldn't find what you were looking for."
        }
      ]
    }, status: :not_found
  end
end
