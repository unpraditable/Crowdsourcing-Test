//This component is to Render Search Box. Main Purpose is to search movie

import React, {Component} from 'react'; 
class AddButton extends Component {

    render() {
        const {search, value} = this.props;
      
        return (
            <div className="fixed-bottom">
                <button class="btn btn-primary"><i className="user-icon"></i>Undang Bergabung</button>
            </div>
        )
    }
}

export default AddButton;