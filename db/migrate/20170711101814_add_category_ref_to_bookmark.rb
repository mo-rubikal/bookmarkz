class AddCategoryRefToBookmark < ActiveRecord::Migration[5.1]
  def change
    add_reference :bookmarks, :category, foregin_key: true
  end
end
