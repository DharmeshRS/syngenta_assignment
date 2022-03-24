import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [count, setCount] = useState()
  let [loading, setLoading] = useState(false)
  let [browserInfo,setBrowserInfo]=useState()
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
  getBrowserInfo()
  }, [])

  const getBrowserInfo=()=>{
    console.log("api loading...")
  setLoading(true)
  fetch('https://api.apicagent.com/?ua=Mozilla/5.0%20(Macintosh;%20Intel%20Mac%20OS%20X%2010_15_5)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/89.0.4389.114%20Safari/537.36')
  .then( (response) => {
  response.json().then( (data) => {
  // console.log(data)
  console.log(data)
  })
  })
  }
  return (
    <div className="App">
    <div className='maindiv'>
       <div>

      </div>
      <div>
              No. of Visitors of Our Website :  <h1>{count}</h1>
        </div>
    </div>
    
        </div>)
}

export default App;
