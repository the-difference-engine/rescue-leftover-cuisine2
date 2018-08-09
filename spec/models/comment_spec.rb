require 'rails_helper'
require 'spec_helper'

RSpec.describe Comment, :type => :model do
	if Recipe.count == 0
		recipe = Recipe.create(id: 1, title: "Beef Stew", ingredients: "beef", directions: "don't make soup by accident", difficulty: "Beginner")
	end
	if Comment.count == 0
		comment = Comment.create(name: "Filbert", text: "This is good", recipe_id: 1)
	end
	comment_first = Comment.new(name: "Filbert", text: "This is good", recipe_id: 1)
	it ("is valid with all valid attributes") do
		expect(comment_first).to be_valid
	end
	comment_orphaned = Comment.new(name: "Filbert", text: "This is good", recipe_id: 2)
	it ("is not valid if it is traced to a nonexistant recipe") do
		expect(comment_orphaned).to_not be_valid
	end
	comment_pivot = Comment.new(name: "Filbert", text: "I changed my mind it's bad", recipe_id: 1)
	it ("is valid even if it traces to a recipe that already has one comment") do
		expect(comment_pivot).to be_valid
	end
end