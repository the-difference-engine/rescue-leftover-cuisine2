# Create Tags Recipe has_many

class Tag < ActiveRecord::Migration[5.2]
  def change
     has_many :recipes
  end
end
