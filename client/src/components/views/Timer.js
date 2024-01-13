import { useState, useEffect } from 'react';

const Timer = (initialTime) => {
    const [time, setTime] = useState(initialTime);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

        const minutes = Math.floor((time % 3600) / 60);
        const remainingSeconds = time % 60; 
        return [minutes,remainingSeconds];
};

export default Timer;



