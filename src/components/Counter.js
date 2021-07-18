import React, { useEffect, useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let title = `You clicked ${count} time`;
        if (count > 1) {
            title += `s`;
        }
        document.title = title;
    });

    return (
        <div>
            <p>You clicked {count} {(count <= 1) ? "time" : "times"}.</p>
            <button onClick={() => setCount(count + 1)}>
                Click Me
            </button>
        </div>
    );
}

export default Counter;
