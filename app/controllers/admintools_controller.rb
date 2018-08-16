class AdmintoolsController < ApplicationController
  def userbase
  	@users = User.all
  end
end
