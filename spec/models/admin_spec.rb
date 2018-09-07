require 'rails_helper'
require 'spec_helper'
require 'faker'

RSpec.describe Admin, :type => :model do
	if Admin.count == 0
		main_admin = Admin.create(email: "finbar@hotmail.com", password: Faker::Internet::password, sign_in_count: 0, created_at: "2018-04-27 09:34:41.306138", updated_at: "2018-04-27 09:34:41.306138", super_admin: true)
	end
	admin_first = Admin.new(email: Faker::Internet.email, password: Faker::Internet::password, sign_in_count: 0, created_at: "2018-04-27 09:34:41.306138", updated_at: "2018-04-27 09:34:41.306138", super_admin: true)
	it ("is valid with all valid attributes") do
		expect(admin_first).to be_valid
	end
	admin_reuse_email = Admin.new(email: "finbar@hotmail.com", password: Faker::Internet::password, sign_in_count: 0, created_at: "2018-04-27 09:34:41.306138", updated_at: "2018-04-27 09:34:41.306138", super_admin: true)
	it ("is not valid if uses email address attached to existing admin") do
		expect(admin_reuse_email).to_not be_valid
	end
	admin_no_sec = Admin.new(email: Faker::Internet.email, password: 'hi', sign_in_count: 0, created_at: "2018-04-27 09:34:41.306138", updated_at: "2018-04-27 09:34:41.306138", super_admin: true)
	it ("is not valid if password is too short") do
		expect(admin_no_sec).to_not be_valid
	end
	admin_symbol_pass = Admin.new(email: Faker::Internet.email, password: '&$&$&$&$&$&$&', sign_in_count: 0, created_at: "2018-04-27 09:34:41.306138", updated_at: "2018-04-27 09:34:41.306138", super_admin: true)
	it ("is valid if password consists of only symbols") do
		expect(admin_symbol_pass).to be_valid
	end
	admin_full_details = Admin.new(email: Faker::Internet.email, password: Faker::Internet::password, sign_in_count: 0, current_sign_in_ip: "55.55.55.55", last_sign_in_ip: "55.55.55.55", created_at: "2018-04-27 09:34:41.306138", updated_at: "2018-04-27 09:34:41.306138", super_admin: false)
	it ("is valid with all possible sign up details") do
		expect(admin_full_details).to be_valid
	end
end
