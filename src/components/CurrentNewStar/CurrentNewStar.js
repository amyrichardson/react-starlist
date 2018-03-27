import React, {Component} from 'react';

class CurrentNewStar extends Component {

    render() {
        return (
            <div>
                <p>Currently adding {this.props.star.name}</p>
            </div>
        )
    }
}

export default CurrentNewStar;