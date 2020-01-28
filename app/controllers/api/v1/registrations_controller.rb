class Api::V1::RegistrationsController < Devise::RegistrationsController
  before_action :configure_permitted_params, except: [:show]

  def show
    render json: current_user
  end

  protected

  def user_fields
    return [:email, :username, :current_password, :first_name, :last_name, :profile_photo, :interests]
  end

  def configure_permitted_params
    devise_parameter_sanitizer.permit(:sign_up, keys: user_fields)
    devise_parameter_sanitizer.permit(:account_update, keys: user_fields)
  end

  def update_resource(resource, params)
    up = params
    photo = up.delete(:profile_photo)

    if photo
      url = ImageUploader.upload_image(photo, user_id: current_user.id)
      if url
        up[:profile_photo] = url
      end
    end

    if params[:current_password]
      return resource.update_with_password(up)
    end
    resource.update_without_password(up)
  end

  def after_update_path_for(resource)
    nil
  end

end
