class BookmarkNewForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bookmark: {
        title: "",
        description: "",
        url: "",
        image_url: "",
        favourite: false
      }
    };
  }

  renderForm (){
    var bookmark = this.state.bookmark;

    return(
      <form className="carbonads form-horizontal">
        <div className="form-group">
          <label className="control-label col-sm-2" style={{"textAlign": "left"}}>Title</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" value={bookmark.title} />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" style={{"textAlign": "left"}}>Description</label>
          <div className="col-sm-10">
            <textarea className="form-control" rows="5" value={bookmark.description}/>
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-2" style={{"textAlign": "left"}}>URL</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" value={bookmark.url}/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" style={{"textAlign": "left"}}>Image URL</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" value={bookmark.image_url}/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" style={{"textAlign": "left"}}>Favourite</label>
          <div className="col-sm-10">
            <input type="checkbox" className="form-control" value={bookmark.favourite ? 1 : 0}/>
          </div>
        </div>

        <button type="submit" className="btn btn-primary" style={{marginRight: "5px"}}>Submit</button>
        <button type="submit" className="btn btn-default" onClick={this.props.onCloseCreateForm.bind(this)}>Cancel</button>
      </form>
    );
  }

  render() {
    return(
      this.renderForm()
    );
  }
}
