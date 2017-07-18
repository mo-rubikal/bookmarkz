class AddSubcategoryRefToBookmark < ActiveRecord::Migration[5.1]
  def change
    add_reference :bookmarks, :subcategory, foregin_key: true
  end
end
