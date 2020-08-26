import React, {Component} from 'react'; 
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';

class Users extends Component {
    state = {
        users: [],
        searchTerm: ''
    }

    componentDidMount() {
        axios.get(`https://iunaptk810.execute-api.ap-southeast-1.amazonaws.com/dev/api/users`)
        .then(res => {
            const users = res.data;
            this.setState({ 
                users: users
            });
        })
    }

    editSearchTerm = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    dynamicSearch = () => {
        return this.state.users.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }
    
    render() {

        var searchString = this.state.searchTerm.trim().toLowerCase();
        let users = this.state.users;

        if (searchString.length > 0) {
            users = users.filter(function(user) {
                return user.name.toLowerCase().match( searchString );
            });
        }

        return (
            <div className="wrapper">

                <input
                    className="form-control"
                    placeholder = "Search"
                    onChange = {this.editSearchTerm} 
                    value={this.state.searchTerm} 
                />
                {/* The Users sub component */}
                <ul className="user-card-container list-unstyled col-12">
                    {users.map(user => 
                        <li className="user-card">
                            <div className="image-container">
                                {/* Render the image from API if there is a picture of user */}
                                    {<img src={`${user.picture}`} alt={`${user.name}`} /> || <Skeleton circle={true} />}   
                            </div>
                            <div className="user-card--title">
                                <p className="name">{user.name || <Skeleton />}</p>
                                <p className="company">{user.company || <Skeleton />}</p>
                            </div>
                        </li>
                    )}
                </ul>
                
            </div>
            
                
        )
    }
}

export default Users;