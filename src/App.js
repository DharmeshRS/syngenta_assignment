import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [count, setCount] = useState()
  let [loading, setLoading] = useState(false)
  
  const getData = () => {
  console.log("api loading...")
  setLoading(true)
  fetch('https://api.countapi.xyz/hit/dharmesh/visits')
  .then( (response) => {
  response.json().then( (data) => {
  // console.log(data)
  setCount(data.value)
  setLoading(false)
  })
  })

  }
  useEffect( () => {
  console.log("run only first Time")
  getData()
  }, [])

  return (
    <div className="App">
        <div>
              No. of Visitors of Our Website :  <h1>{count}</h1>
        </div>
    </div>
  );
}

export default App;
