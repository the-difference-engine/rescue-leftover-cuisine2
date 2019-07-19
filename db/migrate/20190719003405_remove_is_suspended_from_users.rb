class RemoveIsSuspendedFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :is_suspended, :boolean
  end
end
