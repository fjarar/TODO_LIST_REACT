import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props){
        super(props);
        this.state = {
            age: 29
        }
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            }
        ))
    }
}


Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
