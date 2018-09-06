class RegistrationsController < Devise::RegistrationsController

  skip_before_action :require_no_authentication, only: [:new, :create]

  def new
    super
  end

  def create
    build_resource(sign_up_params)

    resource.save
    yield resource if block_given?

    set_flash_message! :notice, :admin_signed_up
    redirect_to root_path
  end

  protected

  def update_resource(resource, params)
    resource.update_without_password(params)
  end
end 