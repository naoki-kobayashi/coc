class Header extends React.Component{
  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <button aria-controls="navbar" aria-expanded="false" className="navbar-toggle collapsed" data-target="#navbar" data-toggle="collapse" type="button">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Project name</a>
          </div>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>  
        </div>
      </nav>
    );
  }
}

class JumboToron extends React.Component{
  render() {
    return(
      <div className="jumbotron">
        <h1>Hello, world!</h1>
        <p> This is an example</p>
      </div>
    );
  }
}

class SideBar extends React.Component{
  render(){
    return(
      <div id="sidebar" className="col-xs-6 col-sm-3 sidebar-offcanvas">
        <Search selectTagList={this.props.selectTagList} search={this.props.search.bind(this)} />
      </div>
    );
  }
}
