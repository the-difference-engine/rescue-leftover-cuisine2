# Create Recipes Table

class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      ## 
      t.string :title,       null: true
      t.string :snippet,     null: true
      t.string :meal,        null: true
      t.text   :ingredients, array: true
      t.text   :directions,  array: true
      t.string :difficulty,  null: true
      t.integer :duration,   null: true
      t.integer :servings,   null: true
      t.string  :photos,     array: true
      t.timestamps   
    end
  end
end
