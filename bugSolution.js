```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct dependency array
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.example.com/data');
        const data = await res.json();
        setCount(data.count);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return <div>Count: {count}</div>;
}

export default MyComponent;
```