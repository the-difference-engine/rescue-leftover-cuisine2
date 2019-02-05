class ApplicationController < ActionController::API
  include ActionController::MimeResponds

  respond_to :json

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  def record_not_found
    render json: {status: 'error', code: 404, message: "Ope! We couldn't find what you were looking for.  Give it another try!"}
  end
end
