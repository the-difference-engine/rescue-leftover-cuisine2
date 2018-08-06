require 'rails_helper'

feature 'recipe management' do
	scenario "adds a new recipe" do
		recipe = create(:recipe)
		p recipe
	end
end