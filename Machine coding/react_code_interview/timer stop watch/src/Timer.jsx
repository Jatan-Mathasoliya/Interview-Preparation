import React, { useState, useEffect } from 'react'

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [isRunnig, setisRunnig] = useState(false)
    const [input, setInput] = useState('');

    useEffect(() => {
            let interval;
            if (seconds > 0 && isRunnig) {
                interval = setInterval(() => {
                    setSeconds(prev => prev - 1);
                }, 1000);
            }
            return () => clearInterval(interval);
    }, [seconds, isRunnig]);

    const handleStart = () => {
        setSeconds(parseInt(input));
        setisRunnig(true);
        setInput('');
    };

    const handleStop = () => {
        setisRunnig(false);
        
    }

    const handleReset = () => {
        setSeconds(0);
    }

    const handleMinutes = (mins) => {
        setSeconds(mins * 60);
        setInput(mins * 60);
    }

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Timer</h1>
            <p style={{ fontSize: '32px' }}>{seconds}s</p>
            <input type="number" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter seconds" />
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>

            <button onClick={() => handleMinutes(1)}>1 Min</button>
            <button onClick={() => handleMinutes(5)}>5 Min</button>
            <button onClick={() => handleMinutes(30)}>30 Min</button>
        </div>
    )
}

export default Timer;