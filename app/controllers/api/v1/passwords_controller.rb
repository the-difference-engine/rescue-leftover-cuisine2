class Api::V1::PasswordsController < Devise::PasswordsController

  def update
    self.resource = resource_class.reset_password_by_token(resource_params)
    yield resource if block_given?

    if resource.errors.empty?
      resource.unlock_access! if unlockable?(resource)
      render json: resource
    else
      set_minimum_password_length
      respond_with resource
    end
  end

end
