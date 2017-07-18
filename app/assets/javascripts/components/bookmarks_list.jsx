class BookmarksList extends React.Component {

  filteredBookmarks(){
    var bookmarks = this.props.bookmarks,
        search = this.props.search,
        category = this.props.category,
        subcategory = this.props.subcategory,
        tags;

    if(this.props.selectedTab === 'favourites'){
      bookmarks = bookmarks.filter(function(bookmark){
        return bookmark.favourite;
      });
    }

    if(search !== ''){
      search = search.toLowerCase();
      bookmarks = bookmarks.filter(function(bookmark){
        tags = bookmark.tags.map(function(tag){ return tag.name;}).join(' ');
        return (
          bookmark.title.toLowerCase().indexOf(search)!== -1  ||
          bookmark.description.toLowerCase().indexOf(search)!== -1 ||
          tags.toLowerCase().indexOf(search)!== -1
        );
      });
    }

    if(category){
      bookmarks = bookmarks.filter(function(bookmark){
        return bookmark.category && bookmark.category.id === category.id;
      });
    }

    if(subcategory){
      bookmarks = bookmarks.filter(function(bookmark){
        return bookmark.subcategory && bookmark.subcategory.id === subcategory.id;
      });
    }

    return bookmarks;
  }

  render() {
    var bookmarks = this.filteredBookmarks(),
        widget = this;

    if(bookmarks.length === 0){
      return <div className="carbonads" style={{paddingLeft: '0px', textAlign: 'center'}}> {this.props.search !== '' ? 'No bookamrks matching your search!' : 'No bookmakrs found!'} </div>
    }

    return(
      <div>
        {bookmarks.map(function(bookmark){
          return(
            <Bookmark
              key={bookmark.id}
              bookmark={bookmark}
              categories={widget.props.categories}
              />
            )
        })}
      </div>
    );
  }
}
