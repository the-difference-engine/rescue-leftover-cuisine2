class AlterCommentsDeletesCascade < ActiveRecord::Migration[5.2]
  def change
    remove_foreign_key :comments, :recipes
    add_foreign_key :comments, :recipes, on_delete: :cascade
  end
end
