class AddAuthorToRecipe < ActiveRecord::Migration[5.2]
  def change
    add_reference :recipes, :user
  end
end
