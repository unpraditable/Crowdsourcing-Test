import React, {Component} from 'react'; 
import axios from 'axios';

class Users extends Component {
    state = {
        users: []
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
    
    render() {

        let users = this.state.users;

        return (
            <div className="wrapper">
                {/* The Users sub component */}
                <ul className="user-card-container list-unstyled col-12">
                    {users.map(user => 
                        <li className="user-card">
                            <div className="image-container">
                                {/* Render the image from API if there is a picture of user */}
                                {user.picture &&
                                    <img src={`${user.picture}`} alt={`${user.name}`} />
                                }
                                
                            </div>
                            <div className="user-card--title">
                                <p className="name">{user.name}</p>
                                <p className="company">{user.company}</p>
                            </div>
                        </li>
                    )}
                </ul>
                
            </div>
            
                
        )
    }
}

export default Users;