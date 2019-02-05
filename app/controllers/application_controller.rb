class ApplicationController < ActionController::API
  include ActionController::MimeResponds

  def error_check
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  end

  def record_not_found(_e)
    render json: {status: 'error', code: 404, message: "Ope! We couldn't find what you were looking for.  Give it another try!"}
  end

  respond_to :json
end
