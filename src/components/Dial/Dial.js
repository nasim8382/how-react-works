import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border: '3px solid pink', margin: '10px'}}>
            <h3>This is Dial</h3>
            <p>Steps I walked: {props.steps}</p>
        </div>
    );
};

export default Dial;