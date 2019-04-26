class Recipe < ApplicationRecord
  include PgSearch
  pg_search_scope(
    :search,
    against: %i(
      title
      ingredients
    ),
    using: {
      tsearch: {
        dictionary: "english",
      }
    }
  )
  belongs_to :user
end
