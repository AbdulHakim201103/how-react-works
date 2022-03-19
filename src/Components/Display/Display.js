import React from 'react';

const Display = (props) => {
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <h3>Steps: {props.steps}</h3>
            <h1>Abdul Hakim Mia</h1>
        </div>
    );
};

export default Display;