import React from 'react';


const Char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'

    }
    return (
        <div onClick={props.clicked} style={style}>
            {props.eachChar}
        </div>
    );
}

export default Char;