// App.jsx
import  { useState } from 'react';
import Page from './page';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleQueryParameters = () => {
    const urlParams = new URLSearchParams(window.location.search);

    if (inputValue) {
      urlParams.set('paramName', inputValue);
      console.log('Updated value of paramName:', inputValue);
    }

    const queryString = urlParams.toString();


    // Navigate to Page component with query parameters
    window.location.href = `/page?${queryString}`;
  };

  return (
    <div>
      <h1>Query Parameter Handling</h1>
      <label htmlFor="paramInput">Enter parameter value:</label>
      <input
        type="text"
        id="paramInput"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleQueryParameters}>Run</button>

      {window.location.pathname === '/page' && (
        <Page  queryParams={window.location.search} />
      )}
    </div>
  );
};

export default App;
