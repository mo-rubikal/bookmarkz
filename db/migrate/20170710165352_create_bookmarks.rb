class CreateBookmarks < ActiveRecord::Migration[5.1]
  def change
    create_table :bookmarks do |t|
      t.string :title
      t.text :url
      t.text :image_url
      t.text :description      
      t.boolean :favourite, default: false

      t.timestamps
    end
  end
end
