class AddAdminTypesToUsers < ActiveRecord::Migration[5.2]
  def change
  	add_column :users, :admin_status, :boolean
  	add_column :users, :superadmin_status, :boolean
  end
end
