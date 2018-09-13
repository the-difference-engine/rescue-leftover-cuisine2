class AddSuperAdminIdentityToAdmins < ActiveRecord::Migration[5.2]
  def change
    add_column :admins, :super_admin, :boolean
  end
end
