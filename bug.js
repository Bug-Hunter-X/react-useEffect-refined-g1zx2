```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect dependency array
    fetch('https://api.example.com/data').then(res => res.json()).then(data => setCount(data.count)); 
  }, []);

  return <div>Count: {count}</div>;
}
```