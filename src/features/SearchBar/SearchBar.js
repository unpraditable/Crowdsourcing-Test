//This component is to Render Search Box. Main Purpose is to search movie

import React, {Component} from 'react'; 
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
class SearchBar extends Component {

    render() {
        // var search = function (e) {
        //     let searchQuery = document.getElementById('searchForm').value;
        //     e.preventDefault();
        //     window.location.href=`/search?title=${searchQuery}`;
        // }
      
        return (
            <Form inline>
                <InputGroup  className="search-input" >
                    <FormControl
                    placeholder="Search..."
                    aria-label="Search..."
                    aria-describedby="basic-addon2" id="searchForm" required
                    />
                </InputGroup>
            </Form>

        )
    }
}

export default SearchBar;