# Create Recipes Table

class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      ## 
      t.string :title,       null: false, default: ""
      t.string :description, null: false, default: ""
      t.text   :ingredients, array: true, default: []
      t.text   :directions,  array: true, default: []
      t.string :difficulty,  null: false, default: "Intermediate"
      t.integer :duration,   null: false, default: 0
      t.integer :servings,   null: false, default: 2
      t.string  :photos,     array: true, default: []    
    end
  end
end
