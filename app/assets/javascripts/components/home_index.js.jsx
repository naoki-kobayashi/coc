class HomeIndex extends React.Component{
  constructor(props){
    super(props);

    var decodedSelectTagList = JSON.parse(props.selectTagList);
    var selectTagList = [];
    for(var i in decodedSelectTagList){
      selectTagList[i] = {name:decodedSelectTagList[i].tag, isSelect:false};
    }

    this.state = {
      videoList: JSON.parse(props.videoList),
      selectTagList: selectTagList,
    };
  }

  render() {
    var videoList = this.state.videoList.map(
      function(video){
        return <Video id={video.id} url={video.url} tagList={video.tag_list} key={video.id} />;
      }
    );

    return (
      <div>
        <Header />
        <div className="container" style={{"marginTop":"70px"}}>
          <div className="row row-affcanvas row-affcanvas-right">
            <div className="col-xs-12 col-sm-9">
              <p className="pull-right visible-xs">
                <button className="btn btn-primary btn-xs" data-toggle="offcanvas" type="button">Toggle nav</button>
              </p>
              <JumboToron />
              <div className="row">
                {videoList}
                <div className="col-xs-6 col-lg-4">
                  <h2>Heading</h2>
                  <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
                  <p>
                    <a className="btn btn-default" href="#" role="button">View details </a>
                  </p>
                </div>
              </div>
            </div>
            <SideBar selectTagList={this.state.selectTagList} search={this.search.bind(this)} />
          </div>
        </div>
      </div>
    );
  }

  search(tagId){
    var tmp = this.state.selectTagList;
    tmp[tagId].isSelect = !tmp[tagId].isSelect;
    var selectedTagList = [];
    for(var i in tmp){
      if(tmp[i].isSelect){
        selectedTagList.push(tmp[i].name);
      } 
    }

    var jqXHR = $.ajax({
      type:"POST",
      url:"search",
      dataType:"json",
      data:{
        selectedTagList:selectedTagList
      },
    });
    jqXHR.done(function(data, dataType){
      console.log('success');
      this.setState({videoList: data});
    }.bind(this))
  
    this.setState({selectTagList: tmp});
  }
}


