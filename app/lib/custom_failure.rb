class CustomFailure < Devise::FailureApp
  def respond
    self.status = :unauthorized
    self.content_type = 'application/json'
    self.response_body = { errors: [{ title: 'Unauthorized', message: i18n_message }]}.to_json
  end
end
