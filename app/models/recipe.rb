class Recipe < ApplicationRecord
  include PgSearch
  multisearchable :against => [:title, :ingredients]
end
