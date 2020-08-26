//This component is to Render Search Box. Main Purpose is to search movie

import React, {Component} from 'react'; 
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
class Intro extends Component {

    render() {
        const {search, value} = this.props;
      
        return (
            <header>
                <i className="arrow"></i>
                <h1>Undang Peserta Terbaik Untuk Tim Baru Mu!</h1>
                <span class="hidden">Hidden</span>
            </header>
        )
    }
}

export default Intro;