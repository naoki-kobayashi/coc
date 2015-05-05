class Search extends React.Component{
  constructor(props){
    super(props);
    var tagList = [];
    for(var i in props.tag_list){
      tagList[i] = {name:props.tag_list[i], isSelect:false};
    }
    this.state = {tagList: tagList};
  }
 
  render() {
    var tagList = this.state.tagList.map(
      function(tag, i){
        var btnType = tag.isSelect ? 'primary' : 'default'; 
        var btnClass = "btn btn-" + btnType;
        return <SearchTag id={i} name={tag.name} selectTag={this.updateTagState.bind(this)} btnClass={btnClass} key={i}/>;
      }
    ,this);

    return (
      <div>{tagList}</div>
    );
  }

  updateTagState(id){
    var tmp = this.state.tagList;
    tmp[id].isSelect = !tmp[id].isSelect;
    this.setState({ tagList: tmp });

    var mediator = new Mediator();
    mediator.search();
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
