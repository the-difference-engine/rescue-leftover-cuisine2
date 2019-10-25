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
  has_many :comments, -> { order('created_at DESC') }
end
