import React from 'react';

const Time = () => (
    <div className="time"> {new Date().toLocaleTimeString()} </div>
);
setInterval(status, 1000);
export default Time;