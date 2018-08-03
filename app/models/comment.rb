class Comment < ApplicationRecord
	belongs_to :recipe, required: true
end
