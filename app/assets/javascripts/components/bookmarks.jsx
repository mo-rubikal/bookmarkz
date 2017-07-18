class Bookmarks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "bookmarks",
      search: "",
      selectedCategory: null,
      selectedSubcategory: null,
      showCreateForm: false
    };
  }

  handleTabChange(name){
    this.setState({selectedTab: name});
  }

  handleSearchChange(value){
    this.setState({search: value});
  }

  handleCategoryChange(type, obj){
    this.state.selectedCategory = null;
    this.state.selectedSubcategory = null;

    if(type === "category"){
      this.state.selectedCategory = obj;
    }else if(type === "subcategory"){
      this.state.selectedSubcategory = obj;
    }

    this.setState(this.state);
  }

  showCreateForm(){
    this.setState({showCreateForm: true});
  }

  handleCloseCreateForm(){
    this.setState({showCreateForm: false});
  }

  render() {
    return(
      <div>
        <Navigator
          categories={this.props.categories}
          selectedTab={this.state.selectedTab}
          onTabChange={this.handleTabChange.bind(this)}
          search={this.state.search}
          onSearchChange={this.handleSearchChange.bind(this)}
          onCategroyChange={this.handleCategoryChange.bind(this)}
        />
        <div className="container-fluid">
          <div className="row content">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
              {!this.state.showCreateForm &&
                <button className="btn btn-default pull-right" onClick={this.showCreateForm.bind(this)}>
                  Add New <i className="glyphicon glyphicon-bookmark" />
                </button>
              }
              {this.state.showCreateForm &&
                <BookmarkNewForm
                  onCloseCreateForm={this.handleCloseCreateForm.bind(this)}
                  categories={this.props.categories}
                />
              }
              <BookmarksList
                bookmarks={this.props.bookmarks}
                categories={this.props.categories}
                selectedTab={this.state.selectedTab}
                search={this.state.search}
                category={this.state.selectedCategory}
                subcategory={this.state.selectedSubcategory}
              />
            </div>
            <div className="col-sm-3"></div>
          </div>
        </div>
      </div>
    );
  }
}
