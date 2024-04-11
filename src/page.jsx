// NextPage.js
import { useEffect, useState } from 'react';

function NextPage() {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        // Retrieve input value from URL when component mounts
        const urlParams = new URLSearchParams(window.location.search);
        const input = urlParams.get('input');
        setInputValue(input);
    }, []);

    return (
        <div>
            <h2>Next Page</h2>
            <p>You typed: {inputValue}</p>
        </div>
    );
}

export default NextPage;
