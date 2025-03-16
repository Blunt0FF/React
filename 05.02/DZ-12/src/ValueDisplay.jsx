import React, { useRef, useEffect } from 'react';

const ValueDisplay = ({ value }) => {
    const prevValueRef = useRef();

    useEffect(() => {
        prevValueRef.current = value;
    }, [value]);

    const prevValue = prevValueRef.current;

    return (
        <div className="value-display">
            <p>Current Value: {value}</p>
            <p>Previous Value: {prevValue !== undefined ? prevValue : 'N/A'}</p>
        </div>
    );
};

export default ValueDisplay;