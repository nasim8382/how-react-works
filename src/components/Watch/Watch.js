import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => setSteps(steps + 1);
    useEffect( () => console.log(steps), [steps])
    return (
        <div style={{border: '3px solid orange', margin: '10px'}}>
            <h2>This is my smart watch</h2>
            <h3>My Current Steps: {steps}</h3>
            <button onClick={increaseSteps}
            style={{padding: '10px 30px', borderRadius: '10px 30px', backgroundColor: 'aqua'}}
            >De dour</button>
            <Display name='Apple Watch' steps={steps}></Display>
        </div>
    );
};

export default Watch;