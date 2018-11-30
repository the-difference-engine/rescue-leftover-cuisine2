class AddBiographicalDataToAdmins < ActiveRecord::Migration[5.2]
  def change
    add_column :admins, :user_name, :string
    add_column :admins, :first_name, :string
    add_column :admins, :last_name, :string
    add_column :admins, :profile_photo, :string
    add_column :admins, :interests, :string
  end
end
