class Api::V1::UsersController < ApplicationController
    before_action :authentication_required
    skip_before_action :authentication_required, only: [:new, :create]
  
    def create
    end

    def show
    end


end