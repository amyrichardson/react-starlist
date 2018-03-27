import React, {Component} from 'react';

class StarForm extends Component {

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input value={this.props.newStar.name} 
                placeholder='Star Name' 
                onChange={this.props.handleChangeFor('name')}/>
                <input value={this.props.newStar.diameter} 
                placeholder='Star Diameter'
                onChange={this.props.handleChangeFor('diameter')}/>
                <input type="submit" value="Add Star"/>
            </form>            
        )
    }
}

export default StarForm;