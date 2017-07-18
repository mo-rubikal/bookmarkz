class CreateJoinTableBookmarksTags < ActiveRecord::Migration[5.1]
  def change
    create_join_table :bookmarks, :tags do |t|
      t.index [:bookmark_id, :tag_id]
    end
  end
end
