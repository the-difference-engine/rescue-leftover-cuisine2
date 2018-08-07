require 'rails_helper'
require 'capybara'

feature 'recipe management' do
	scenario "adds a new recipe" do
		recipe = create(:recipe)
		p recipe
	end
end