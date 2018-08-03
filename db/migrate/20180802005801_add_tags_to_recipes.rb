class AddTagsToRecipes < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :duration, :string
    add_column :recipes, :servings, :integer
    add_column :recipes, :tag1, :string
    add_column :recipes, :tag2, :string
    add_column :recipes, :tag3, :string
  end
end
