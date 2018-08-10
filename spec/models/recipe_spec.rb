require 'rails_helper'
require 'spec_helper'

RSpec.describe Recipe, :type => :model do
	if Recipe.count == 0
		recipe = Recipe.create(id: 1, title: "Beef Stew", ingredients: "beef", directions: "don't make soup by accident", difficulty: "Beginner")
	end
	recipe_outside = Recipe.new(title: "Beef Stew", ingredients: "beef", directions: "don't make soup by accident", difficulty: "Beginner")
	it ("is valid with all valid attributes") do
		expect(recipe_outside).to be_valid
	end
	it ("does not have a difficulty of Intermediate") do
		expect(recipe_outside[:difficulty]).to_not eq("Intermediate")
	end
	it ("does not have a difficulty of Advanced") do
		expect(recipe_outside[:difficulty]).to_not eq("Advanced")
	end
	recipe_full = Recipe.new(title: "Chicken Soup", description: "best medicine", ingredients: "chicken broth and noodles", directions: "don't make soup by accident", difficulty: "Beginner", duration: "50 minutes", servings: 10, tag1: "hearty", tag2: "main dish", tag3: "under 10 ingredients", photo: "puppy")
	it ("is valid with all possible attributes") do
		expect(recipe_full).to be_valid
	end
	recipe_overfull = Recipe.new(title: "Chicken Soup", description: "best medicine", ingredients: "chicken broth and noodles", directions: "don't make soup by accident", difficulty: "Beginner", duration: "50 minutes", servings: 10, tag1: "hearty", tag2: "main dish", tag3: "under 10 ingredients", tag3: "brownish", photo: "puppy")
	it ("takes the latest given value with multiple values for an attribute") do
		expect(recipe_overfull[:tag3]).to eq("brownish")
	end
	recipe_2 = Recipe.new(title: "Beef Stew", directions: "don't make soup by accident", difficulty: "Beginner")
	it ("is not valid without ingredients") do
		expect(recipe_2).to_not be_valid
	end
	recipe_wrong_diff = Recipe.new(title: "Chicken Soup", description: "best medicine", ingredients: "chicken broth and noodles", directions: "don't make soup by accident", difficulty: "Easy", duration: "50 minutes", servings: 10, tag1: "hearty", tag2: "main dish", tag3: "under 10 ingredients", photo: "puppy")
	it ("is not valid without an allowed answer for difficulty") do
		expect(recipe_wrong_diff).to_not be_valid
	end
	recipe_non_whole_servings = Recipe.new(title: "Chicken Soup", description: "best medicine", ingredients: "chicken broth and noodles", directions: "don't make soup by accident", difficulty: "Beginner", duration: "50 minutes", servings: 10.874464, tag1: "hearty", tag2: "main dish", tag3: "under 10 ingredients", photo: "puppy")
	it ("is not valid with a non-integer rational number for servings") do
		expect(recipe_non_whole_servings).to_not be_valid
	end
	recipe_blank_title = Recipe.new(title: "", description: "best medicine", ingredients: "chicken broth and noodles", directions: "don't make soup by accident", difficulty: "Beginner", duration: "50 minutes", servings: 10, tag1: "hearty", tag2: "main dish", tag3: "under 10 ingredients", photo: "puppy")
	it ("is not valid with an empty string as a recipe title") do
		expect(recipe_blank_title).to_not be_valid
	end
	recipe_serves_none = Recipe.new(title: "Chicken Soup", description: "best medicine", ingredients: "chicken broth and noodles", directions: "don't make soup by accident", difficulty: "Beginner", duration: "50 minutes", servings: 0, tag1: "hearty", tag2: "main dish", tag3: "under 10 ingredients", photo: "puppy")
	it ("is not valid if the servings count is 0") do
		expect(recipe_serves_none).to_not be_valid
	end
end