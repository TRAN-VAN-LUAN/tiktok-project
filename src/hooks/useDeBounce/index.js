import { useState, useEffect } from 'react';

function useDeBounce(value, delay) {
    const [bounce, setBounce] = useState(value);
    useEffect(() => {
        let handleClear = setTimeout(() => setBounce(value), delay);

        return () => clearTimeout(handleClear);
    }, [value]);

    return bounce;
}

export default useDeBounce;
