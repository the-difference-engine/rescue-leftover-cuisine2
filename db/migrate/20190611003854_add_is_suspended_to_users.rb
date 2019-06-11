class AddIsSuspendedToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :is_suspended, :boolean, :default => false
  end
end
