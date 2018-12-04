class AddSuspendedToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :suspended_status, :boolean
  end
end
