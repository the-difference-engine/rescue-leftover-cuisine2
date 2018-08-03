require 'rails_helper'

RSpec.describe Recipe, :type => :model do
	recipe = Recipe.new(title: "Beef Stew", ingredients: "beef", directions: "don't make soup by accident", difficulty: "Beginner")
	it ("is valid with all valid attributes") do
		expect(recipe).to be_valid
	end
	recipe_full = Recipe.new(title: "Chicken Soup", description: "best medicine", ingredients: "chicken broth and noodles", directions: "don't make soup by accident", difficulty: "Beginner", duration: "50 minutes", servings: 10, tag1: "hearty", tag2: "main dish", tag3: "under 10 ingredients")
	it ("is valid with all possible attributes") do
		expect(recipe_full).to be_valid
	end
	recipe_overfull = Recipe.new(title: "Chicken Soup", description: "best medicine", ingredients: "chicken broth and noodles", directions: "don't make soup by accident", difficulty: "Beginner", duration: "50 minutes", servings: 10, tag1: "hearty", tag2: "main dish", tag3: "under 10 ingredients", tag3: "brownish")
	it ("is not valid with multiple values for attribute") do
		expect(recipe_overfull).to_not be_valid
		p recipe_overfull
	end
	recipe_2 = Recipe.new(title: "Beef Stew", directions: "don't make soup by accident", difficulty: "Beginner")
	it ("is not valid without ingredients") do
		expect(recipe_2).to_not be_valid
	end

end