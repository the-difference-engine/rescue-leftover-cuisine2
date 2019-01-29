class CustomFailure < Devise::FailureApp
  def http_auth_body
    return super unless request_format == :json
    {
      errors: [
        {
          title: 'Unauthorized',
          message: i18n_message
        }
      ]
    }.to_json
  end
end
