class Api::V1::ConfirmationsController < Devise::ConfirmationsController

    def show
        self.resource = resource_class.confirm_by_token(params[:confirmation_token])
        yield resource if block_given?
        
        if resource.errors.empty?
          sign_in(resource_name, resource)
          render json: resource
        else
          render json: resource.errors, status: :unprocessable_entity
        end
      end
end
