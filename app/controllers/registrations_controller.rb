class RegistrationsController < Devise::RegistrationsController

  #below line ensures that an error is not thrown
  #due to devise by default not letting an admin
  #access the sign_up page while already signed in
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
end 