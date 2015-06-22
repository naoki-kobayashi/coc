class InquiryIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      contents: ""  
    };
  }

  render() {
    return (
      <div>
        <Header />
        <form id="inquiryForm" role="form">
          <div className="page-header" style={{"marginTop":"70px"}}>
            <h1>お問い合わせ</h1>
          </div>
          <table className="table">
            <tr>
              <th>名前(<span className="text-danger">必須</span>)</th>
              <td><input type="text" name="name" className="form-controll" required value={this.state.name} onChange={this._handleChange.bind(this, 'name')} /></td>
            </tr>
            <tr>
              <th>メールアドレス(<span className="text-danger">必須</span>)</th>
              <td><input type="email" name="email" className="form-controll" required value={this.state.email} onChange={this._handleChange.bind(this, 'email')} /></td>
            </tr>
            <tr>
              <th>お問い合わせ内容(<span className="text-danger">必須</span>)</th>
              <td><input type="text" name="contents" className="form-controll" required value={this.state.contents} onChange={this._handleChange.bind(this, 'contents')} /></td>
            </tr>
          </table>
          <button onClick={this._confirm.bind(this)}>確認する</button>
          <ConfirmModal name={this.state.name} email={this.state.email} contents={this.state.contents}/>
        </form>
      </div>
    );
  }

  _handleChange(field , e){
    var nextState = this.state;
    nextState[field] = e.target.value;
    this.setState(nextState);
  }

  _confirm(e){
    if(this.state.name == "dame"){
      e.preventDefault();
      console.log("finish prevent");
    }
    console.log(this.state.name);
    console.log("confirm");
    $("#inquiryForm").validate({
      submitHandler: function(form){
        $("#confirmModal").modal();
      }
    });
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


class ConfirmModal extends React.Component{
  constructor(props){
    super(props, this);
  }

  render() {
    return(
      <div className="modal fade" id="confirmModal" tabIndex="-1" role="dialog" aria-labelledby="confirmModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="confirmModalLabel">下記の内容で送信します。よろしいですか?</h4>
            </div>
            <div className="modal-body">
              <table className="table">
                <tr>
                  <th>名前</th>
                  <td>{this.props.name}</td>
                </tr>
                <tr>
                  <th>メールアドレス</th>
                  <td>{this.props.email}</td>
                </tr>
                <tr>
                  <th>お問い合わせ内容</th>
                  <td>{this.props.contents}</td>
                </tr>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">OK</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
