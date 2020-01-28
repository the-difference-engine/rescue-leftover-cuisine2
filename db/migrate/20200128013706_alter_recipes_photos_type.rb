class AlterRecipesPhotosType < ActiveRecord::Migration[5.2]
  def change
    remove_column :recipes, :photos, :string
    add_column :recipes, :photo, :string
  end
end
