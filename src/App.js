import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [count, setCount] = useState(1)
  let [loading, setLoading] = useState(false)
  // let [dummyState, updateDummyState] = useState(false)
  // const toggleDummyState = () => {
  // console.log("toggle dummy state")
  // dummyState = updateDummyState(!dummyState)
  // }
  // useEffect( () => {
  // console.log("only for this dummy state")
  // }, [dummyState])
  const updateCount = () => {
  // setCount(count + 1)
  getData()
  }
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
  .then( (data) => {
  setLoading(false)
  // console.error(data)
  });
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
