class Bookmark extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      bookmark: null
    };
  }

  switchEditMode(e){
    e.preventDefault();
    e.stopPropagation();

    var obj = JSON.parse(JSON.stringify(this.props.bookmark))
    this.setState({editMode: true, bookmark: obj});
  }

  switchViewMode(e){
    e.preventDefault();
    e.stopPropagation();

    this.setState({editMode: false});
  }

  handleInputChange(e){
    var name = e.target.name,
        value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.state.bookmark[name] = value;
    this.setState(this.state);
  }

  handleSelectChange(e){

  }

  renderEditMode (){
    var bookmark = this.state.bookmark,
        subcategories = [],
        category;

    if(bookmark.category){
      category = this.props.categories.filter(function(category){ return category.id === bookmark.category.id})[0];
      subcategories = category.subcategories;
    }

    return(
      <form className="carbonads form-horizontal">
        <div className="form-group">
          <label className="control-label col-sm-2" style={{"textAlign": "left"}}>Title</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="title" value={bookmark.title}  onChange={this.handleInputChange.bind(this)}/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" style={{"textAlign": "left"}}>Description</label>
          <div className="col-sm-10">
            <textarea className="form-control" rows="5" value={bookmark.description} name="description" onChange={this.handleInputChange.bind(this)}/>
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-2" style={{"textAlign": "left"}}>URL</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" value={bookmark.url} name="url" onChange={this.handleInputChange.bind(this)}/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" style={{"textAlign": "left"}}>Image URL</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" value={bookmark.image_url} name="image_url" onChange={this.handleInputChange.bind(this)}/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" style={{"textAlign": "left"}}>Favourite</label>
          <div className="col-sm-10">
            <input type="checkbox" className="form-control" checked={bookmark.favourite} name="favourite" onChange={this.handleInputChange.bind(this)}/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" style={{"textAlign": "left"}}>Category</label>
          <div className="col-sm-10">
            <select className="form-control" name="category" onChange={this.handleSelectChange.bind(this)}>
              <option
                value=""
                selected={!bookmark.category}>
              </option>
              { this.props.categories.map(function(category){
                return(
                    <option
                      key={["cat", category.id].join('-')}
                      value={category.id}
                      selected={bookmark.category&&bookmark.category.id===category.id}>
                      {category.name}
                    </option>
                  )
                })
              }
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" style={{"textAlign": "left"}}>Subcategory</label>
          <div className="col-sm-10">
            <select className="form-control" name="subcategory" onChange={this.handleSelectChange.bind(this)}>
              <option
                value=""
                selected={!bookmark.subcategory}>
              </option>
              { subcategories.map(function(subcategory){
                return(
                    <option
                      key={["subcat", subcategory.id].join('-')}
                      value={subcategory.id}
                      selected={bookmark.subcategory&&bookmark.subcategory.id===subcategory.id}>
                      {subcategory.name}
                    </option>
                  )
                })
              }
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" style={{marginRight: "5px"}}>Submit</button>
        <button type="submit" className="btn btn-default" onClick={this.switchViewMode.bind(this)}>Cancel</button>
      </form>
    );
  }

  renderViewMode(){
    var bookmark = this.props.bookmark,
        favouriteImgSrc = bookmark.favourite ? "/assets/filled-star.gif" : "/assets/unfilled-star.png";
    return(
      <div className="carbonads">
        <span>
          <span className="carbon-wrap">
            <a href={bookmark.url} className="carbon-img" target="_blank">
              <img src={bookmark.image_url} style={{maxWidth: '130px', 'height': '100px', width: '130px'}}/>
            </a>
            <a href={bookmark.url} className="carbon-text" target="_blank">{bookmark.title}</a>
            <a href="#" className="pull-right" onClick={this.switchEditMode.bind(this)}>
              <i className="glyphicon glyphicon-edit"/>
            </a>
            <a href={bookmark.url} className="carbon-text" target="_blank">Edit</a>
          </span>
          <a href={bookmark.url} className="carbon-poweredby" target="_blank">{bookmark.description}</a>
        </span>

        <span>
          {bookmark.category &&
            <span className="label label-primary" style={{marginRight: '7px', fontWeight: 'normal'}}>{bookmark.category.name}</span>
          }
          {bookmark.subcategory &&
            <span className="label label-default">{bookmark.subcategory.name}</span>
          }
          <br/>
          {bookmark.tags.length > 0 &&
            <span>
              {bookmark.tags.map(function(tag){
                return <span key={tag.id} className="label label-info" style={{marginRight: '7px', fontWeight: 'normal'}}>
                        <i className="glyphicon glyphicon-tag" style={{paddingRight: '3px'}}/>
                        {tag.name}
                      </span>
              })}
            </span>
          }
        </span>

        <img className="favorite" src={favouriteImgSrc}/>
      </div>
    );
  }

  render() {
    var content = this.state.editMode ? this.renderEditMode() : this.renderViewMode();
    return(
      content
    );
  }
}
