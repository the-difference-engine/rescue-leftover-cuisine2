class Recipe < ActiveRecord::Base
	validates :title, :ingredients, :directions, :presence => true
	validates_inclusion_of :difficulty, :in => ["Beginner", "Intermediate", "Advanced"]
end