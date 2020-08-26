//This component is to Render Search Box. Main Purpose is to search movie

import React, {Component} from 'react'; 
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
class AddButton extends Component {

    render() {
        const {search, value} = this.props;
      
        return (
            <div className="fixed-bottom">
                <button class="btn btn-primary">Undang Bergabung</button>
            </div>
        )
    }
}

export default AddButton;