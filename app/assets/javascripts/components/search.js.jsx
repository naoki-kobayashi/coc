class Search extends React.Component{
  render() {
    var tagList = this.props.selectTagList.map(
      function(tag, i){
        var btnType = tag.isSelect ? 'primary' : 'default'; 
        var btnClass = "btn btn-" + btnType;
        //return <SearchTag id={i} name={tag.name} selectTag={this.updateTagState.bind(this)} btnClass={btnClass} key={i}/>;
        return <SearchTag id={i} name={tag.name} selectTag={this.props.search.bind(this)} btnClass={btnClass} key={i}/>;
      }
    ,this);

    return (
      <div>{tagList}</div>
    );
  }
}

class SearchTag extends React.Component{
  constructor(props){
    super(props, this);
  }

  render(){
    return(
      <button type="button" onClick={this._select.bind(this, this.props.id)} className={this.props.btnClass}>{this.props.name}</button>
    );
  }
  
  _select(e){
    this.props.selectTag(this.props.id);
  }
}
