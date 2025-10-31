import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/getstudent')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

  return (
    <div>
      <h1>Apple</h1>
      <h1 className="text-3xl font-bold underline">
        {JSON.stringify(data)}
      </h1>
    </div>
  );
}

export default App;
