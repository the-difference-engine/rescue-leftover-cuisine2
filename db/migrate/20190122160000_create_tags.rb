# Create Tags Table

class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      ## 
      t.string :title,null: false   
    end
  end
end
