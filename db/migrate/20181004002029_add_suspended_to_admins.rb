class AddSuspendedToAdmins < ActiveRecord::Migration[5.2]
  def change
    add_column :admins, :suspended_status, :boolean
  end
end
