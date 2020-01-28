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
  has_and_belongs_to_many :tags
  has_many :comments, -> { order('created_at DESC') }

  def as_json(options = {})
    super(options).merge({
      'comment_count' => comments.count
    })
  end
end
