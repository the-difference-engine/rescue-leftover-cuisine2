class AddTitleToRecipes < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :title, :string
  end
end
