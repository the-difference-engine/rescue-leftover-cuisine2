require 'rails_helper'
require 'spec_helper'
require 'faker'

RSpec.feature 'Admin signs in' do
	given!(:admin) { Admin.create(email: "finbar2@hotmail.com", password: 'swordfish', sign_in_count: 0, created_at: "2018-04-27 09:34:41.306138", updated_at: "2018-04-27 09:34:41.306138", super_admin: false) }

	scenario 'with valid input' do
		visit root_path
		click_link 'Admin Portal'
		fill_in 'admin_email', with: 'finbar2@hotmail.com'
		fill_in 'admin_password', with: 'swordfish'
		click_button 'Log in'
		expect(page).to have_content 'finbar2@hotmail.com'
		expect(page).to_not have_content 'Create New Admin'
	end
	scenario 'without valid input' do
		visit root_path
		click_link 'Admin Portal'
		fill_in 'admin_email', with: 'finbar2@hotmail.com'
		fill_in 'admin_password', with: 'fishsword'
		click_button 'Log in'
		expect(page).to have_content 'Invalid Email'
	end
end

RSpec.feature 'Superadmin creates admin' do
	given!(:superadmin) { Admin.create(email: "finbar3@hotmail.com", password: 'knifeshark', sign_in_count: 0, created_at: "2018-04-27 09:34:41.306138", updated_at: "2018-04-27 09:34:41.306138", super_admin: true, id: 10) }

	scenario 'sign in test' do
		visit root_path
		click_link 'Admin Portal'
		fill_in 'admin_email', with: 'finbar3@hotmail.com'
		fill_in 'admin_password', with: 'knifeshark'
		click_button 'Log in'
		expect(page).to have_content 'Create New Admin'
	end

	scenario 'with valid input and logs in admin' do
		visit root_path
		click_link 'Admin Portal'
		fill_in 'admin_email', with: 'finbar3@hotmail.com'
		fill_in 'admin_password', with: 'knifeshark'
		click_button 'Log in'
		click_link 'Create New Admin Account'
		fill_in 'admin_email', with: 'finbar4@hotmail.com'
		fill_in 'admin_password', with: 'spearwhale'
		fill_in 'admin_password_confirmation', with: 'spearwhale'
		click_button 'Sign up'
		expect(page).to have_content 'finbar3@hotmail.com'
		click_link 'Sign out'
		expect(page).to have_content 'Admin Portal'
		click_link 'Admin Portal'
		fill_in 'admin_email', with: 'finbar4@hotmail.com'
		fill_in 'admin_password', with: 'spearwhale'
		click_button 'Log in'
		expect(page).to have_content 'finbar4@hotmail.com'
		expect(page).to_not have_content 'Create New Admin'
	end
end