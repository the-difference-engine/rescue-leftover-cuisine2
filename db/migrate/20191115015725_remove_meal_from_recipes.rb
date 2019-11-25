class RemoveMealFromRecipes < ActiveRecord::Migration[5.2]
  def change
    remove_column :recipes, :meal, :string
  end
end
