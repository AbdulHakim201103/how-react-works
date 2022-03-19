import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps,setSteps] = useState (0);
    const increaseSteps = () => {
        setSteps(steps +1)
    }
    // useEffect({
        
    // },[])
    return (
        <div>
            <h1>Steps Count: {steps}</h1>
            <button onClick={increaseSteps}>Staps</button>
            <Display name='Jabir Hossin' steps={steps}></Display>

        </div>
    );
};

export default Watch;