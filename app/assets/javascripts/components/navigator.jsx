class Navigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesNavName: "All Categories"
    };
  }  

  searchChange(e){
    e.preventDefault();
    e.stopPropagation();
    this.props.onSearchChange(e.currentTarget.value);
  }

  clearSearch(){
    this.props.onSearchChange('');
  }

  onCategroyChange(type, obj, e){
    e.preventDefault();
    e.stopPropagation();

    var name;
    if(type === "all"){
      name = "All Categories"
    }else{
      name = obj.name
    }    
    this.props.onCategroyChange(type, obj);
    this.setState({categoriesNavName: name});
  }

  renderCategories(){
    var widget = this;
    return(
      this.props.categories.map(function(category){
        return(
          [
            <li key={["cat", category.id].join('-')}><a href="#" onClick={widget.onCategroyChange.bind(widget, "category", category)}>{category.name}</a></li>, 
            category.subcategories.map(function(subcategory){
             return(<li key={["subcat", subcategory.id].join('-')}><a href="#" onClick={widget.onCategroyChange.bind(widget, "subcategory", subcategory)}>&nbsp;&nbsp;&nbsp;&nbsp;{subcategory.name}</a></li>)
            })
          ]
        )
      })
    );
  }

  render() {
    return(
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container nav-contain">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> 
              <span className="sr-only">Navigation</span> 
              <span className="icon-bar"></span> 
              <span className="icon-bar"></span> 
              <span className="icon-bar"></span> 
            </button>
            <a className="navbar-brand" href="/">
              <span style={{color: 'white'}}>Book&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arkz</span>
              <img style={{height: '58px', marginLeft: '25px', marginTop: '-13px'}} src="/assets/bookmarks-logo.png" alt="Bootstrap Cheat Sheets logo"/>
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="nav-search">
                <div className="input-group">
                  <input id="glyph-search" type="text" className="form-control" placeholder="Search" value={this.props.search} onChange={this.searchChange.bind(this)}/>
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={this.clearSearch.bind(this)}>X</button>
                  </span>
                </div>
              </li>
              <li className={this.state.categoriesNavName === "All Categories" ? "dropdown" : "dropdown active"}>
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="false">{this.state.categoriesNavName} <b className="caret"></b></a>
                <ul className="dropdown-menu">
                  <li ><a href="#" onClick={this.onCategroyChange.bind(this, "all", "")}>All Categories</a></li>, 
                  {this.renderCategories()}
                </ul>
              </li>
              <li className={this.props.selectedTab === "favourites" ? "active" : ""}> <a href="javascript:;" onClick={this.props.onTabChange.bind(this, 'favourites')}>Favourites</a></li>
              <li className={this.props.selectedTab === "bookmarks" ? "active" : ""}> <a href="javascript:;" onClick={this.props.onTabChange.bind(this, 'bookmarks')}>Bookmarks</a></li>
              <li>
                <a rel="nofollow" data-method="DELETE" href="/users/sign_out">Sign out</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}