class Recipe < ApplicationRecord
  include PgSearch
  pg_search_scope :search_by_keyword, :against => [:title, :ingredients]
  belongs_to :user
end
