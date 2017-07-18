class BookmarksController < ApplicationController
  before_action :authenticate_user!
  def index
    @bookmarks = Bookmark.latest.includes(:category, :subcategory).map do |bookmark|

      category = bookmark.category ? {name: bookmark.category.name, id: bookmark.category.id} : nil
      subcategory = bookmark.subcategory ? {name: bookmark.subcategory.name, id: bookmark.subcategory.id} : nil
      {
        id: bookmark.id,  
        title: bookmark.title,
        description: bookmark.description,
        url: bookmark.url,
        image_url: bookmark.image_url,
        favourite: bookmark.favourite,
        category: category,
        subcategory: subcategory,
        tags: bookmark.tags.map {|tag| {id: tag.id, name: tag.name}}
      }
    end
    @categories = Category.includes(:subcategories).map do |cat| 
      {
        id: cat.id, 
        name: cat.name,
        subcategories: cat.subcategories.map {|sub| {id: sub.id, name: sub.name}} 
      } 
    end
  end

  def favourites
    @bookmarks = Bookmark.favourite
    render :index
  end
end
