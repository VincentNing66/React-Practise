import React from 'react';
import Radium, { StyleRoot } from 'radium';

class RadiumStyle extends React.Component {
    render() {
        const style = {

            textAlign: 'center',
            color: 'black',
            backgroundColor: 'green',
            margin: '16px',
            padding: '16px',
            ':hover': {
                backgroundColor: 'red',
                color: 'white'
            },
            // '@media (min-width: 500px)': {
            //     width: '450px',
            // }
        }
        return (
            <StyleRoot>
                <div style={style}>
                    This is Radium Style Componenet
                </div >
            </StyleRoot>
        );
    }

}

export default Radium(RadiumStyle);