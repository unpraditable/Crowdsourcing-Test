//This component is to Render Search Box. Main Purpose is to search movie

import React, {Component} from 'react'; 
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
class SearchBar extends Component {

    render() {
        const {search, value} = this.props;
      
        return (
            <input
                className="form-control"
                placeholder = "Search"
                onChange={(e) => search(e.target.value)}
                value={value} 
            />

        )
    }
}

export default SearchBar;