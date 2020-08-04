import React, { Component } from 'react';
import RadiumStyle from "./RadiumStyle";
import CSSModules from './CSSModules';
import StyledComponents from "./StyledComponents";

class TaskTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <RadiumStyle />
                <StyledComponents />
                <CSSModules />
            </div>
        );
    }
}

export default TaskTwo;