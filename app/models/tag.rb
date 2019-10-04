class Tag < ApplicationRecord
    include PgSearch
        pg_search_scope(
            :search,
            against: %i(
             title
            ),
            using: {
                tsearch: {
                dictionary: "english",
            }
            }
  )

    has_and_belongs_to_many :recipes
end
