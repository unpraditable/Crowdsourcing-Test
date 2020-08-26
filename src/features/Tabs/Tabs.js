//This component is to Render Search Box. Main Purpose is to search movie

import React, {Component} from 'react'; 
class Tabs extends Component {

    render() {
        const {search, value} = this.props;
      
        return (
            <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                <a class="nav-item nav-link active" role="tab" aria-controls="nav-home" aria-selected="true">Desainer</a>
                <a class="nav-item nav-link"  role="tab" aria-controls="nav-profile" aria-selected="false">Guru</a>
            </div>

        )
    }
}

export default Tabs;