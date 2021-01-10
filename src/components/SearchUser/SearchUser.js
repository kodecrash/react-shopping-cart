import React,  { Component } from 'react';
import './SearchUser.css';

class SearchUser extends Component {

    state = {
       showUserDetails: false
    }

    showUserDetails() {
        console.log('Show user details');
        this.setState({ showUserDetails: true});
    }

    render () {
        let userDetailsTemplate = null;

        if (this.state.showUserDetails) {
            userDetailsTemplate = (
                <div className="row mt-3">
                <div className="col-md-12">
                    <div className="card panel-card text-left">
                        <div className="card-body">
                            <div className="card-text"><strong>Current User :</strong> <span
                                    className="currentUser">Rahul Pandit Kulkarni
                                </span></div>
                            <div className="card-text"><strong>Address :</strong> <span className="userAddress">Kharadi,
                                    Pune</span></div>
                        </div>
                    </div>
                </div>
              </div>
            );
        }

        return (
          <>
            <div className="row mt-3">
                <div className="col-md-8 col-8">
                    <input type="text" className="form-control" id="username" placeholder="Enter Current User Name"/>
                </div>
                <div className="col-md-4 col-4  text-left">
                    <button className="btn btn-large btn-purple" 
                            id="showUserBtn"
                            onClick={this.showUserDetails.bind(this)}>
                        Show
                    </button>
                </div>
            </div>
            {userDetailsTemplate}
           </>

        )
    }

}

export default SearchUser;