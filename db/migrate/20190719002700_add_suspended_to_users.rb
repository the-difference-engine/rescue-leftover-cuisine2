class AddSuspendedToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :suspended, :boolean
  end
end
