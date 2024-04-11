// HomePage.js
import { useState } from 'react';

function HomePage() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update the URL with the input value
    window.location.href = `/page${inputValue}`;
  };

  return (
    <div className=' mx-auto mt-16 w-52'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type something..."
        />
        <button type="submit" className=' bg-slate-400'>Submit</button>
      </form>
    </div>
  );
}

export default HomePage;
