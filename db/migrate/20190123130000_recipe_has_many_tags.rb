# Create Join Recipe Tags Table

class Recipe < ActiveRecord::Migration[5.2]
  def change
     has_many :tags
    end
  end
end
