class AddRecipeRefToComments < ActiveRecord::Migration[5.2]
  def change
    add_reference :comments, :recipe, foreign_key: true
  end
end
