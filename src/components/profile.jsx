import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Profile extends Component{
  constructor(props){
    super(props);
    this.state={
      profile:{}
    }
  }
  getProfileData(){
    $.ajax({
      url:"https://api.github.com/users/rbrahul?client_id="+this.props.clientID+"&client_secret="+this.props.clientSecret,
      type:"GET",
      dataType:"json",
      cache:false,
      success:function(data){
        console.log(data);
        this.setState({profile:data});
      }.bind(this)
      ,
      error:function(err){
        console.log(err)
      }.bind(this)
    });
  }
  componentDidMount(){
   this.getProfileData();
  }
  render(){
  
return (
   <div>
   <div className="panel panel-default">
  <div className="panel-heading">
    <h3 className="panel-title">{this.state.profile.name}</h3>
  </div>
  <div className="panel-body">
    <div className="row">
         <div className="col-md-12">
              <div className="col-md-4">
              <img src={this.state.profile.avatar_url}  className="img thumbnail profile-pic"/> 
              <a href={this.state.profile.html_url} className="btn btn-primary btn-sm" target="_blank">View Profile</a>
              </div>
              <div className="col-md-8">
              <ul className="list-group">
                  <li className="list-group-item"><b>Full Name:</b> {this.state.profile.name}</li>
                   <li className="list-group-item"><b>Bio</b>: {this.state.profile.bio}</li>
                  <li className="list-group-item"><b>Location</b>: {this.state.profile.location}</li>
                  <li className="list-group-item"><b>Followers:</b> {this.state.profile.followers}</li>
                  <li className="list-group-item"><b>Followings:</b> {this.state.profile.following}</li>
                  <li className="list-group-item">Vestibulum at eros</li>
              </ul>
              </div>
        </div>
    </div>
  </div>
</div>

   </div>
   );
}


}

Profile.defaultProps={
  clientId:"a61d6a7c85bfe8a07238",
  clientSecret:"d82373f2e6c74709af206cc019abc96f06d3b3fa"
};

export default  Profile;
