class Recipe < ActiveRecord::Base
	validates :title, :ingredients, :directions, :presence => true
	validates_inclusion_of :difficulty, :in => ["Beginner", "Intermediate", "Advanced"]
	validates :servings, numericality: {only_integer: true, greater_than_or_equal_to: 1}, :allow_nil => true
	belongs_to :user
end