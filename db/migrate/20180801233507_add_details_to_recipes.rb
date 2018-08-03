class AddDetailsToRecipes < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :description, :string
    add_column :recipes, :ingredients, :string
    add_column :recipes, :directions, :string
  end
end
