class Bookmark < ApplicationRecord
  has_and_belongs_to_many :tags
  belongs_to :category
  belongs_to :subcategory

  scope :favourite, ->{where(favourite: true)}
  scope :latest, ->{order(created_at: :desc)}
end
