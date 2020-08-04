import React from 'react';
import classes from './styles.css'

const CSSModules = () => {
    const assignedClasses = [];
    assignedClasses.push(classes.divStyle);
    return (
        <div className={assignedClasses.join(' ')}>
            This is a CSS Moduale
        </div>
    );
}

export default CSSModules;