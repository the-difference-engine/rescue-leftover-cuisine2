# Create Join Recipe Tags Table

class CreateJoinTableRecipeTags < ActiveRecord::Migration[5.2]
  def change
    create_join_table :recipes, :tags do |t| 
      t.index [ :recipe_id, :tag_id ] 
    end
  end
end
