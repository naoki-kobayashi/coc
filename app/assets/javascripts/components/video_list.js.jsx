class VideoList extends React.Component{
  constructor(){
    var mediator = new Mediator();
    mediator.addReactor(this); 
  }
  render() {
    var tagList = this.props.tag_list.join(' ');

    return (
      <div className="col-xs-6 col-lg-4">
        <h2>Heading</h2>
        <iframe allowfullscreen frameborder="0" width="290" height="163" src={this.props.url}></iframe>
        <div className="well well-sm">{tagList}</div>
      </div>
    );
  }
};
