import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [count, setCount] = useState()
  let [loading, setLoading] = useState(false)
  let information={
    "browser_family": "Chrome",
    "client": {
    "engine": "Blink",
    "engine_version": "unknown",
    "name": "Chrome",
    "type": "browser",
    "version": "89.0.4389.114"
    },
    "device": {
    "brand": "Apple",
    "model": "unknown",
    "type": "desktop"
    },
    "os": {
    "name": "Mac",
    "platform": "unknown",
    "version": "10.15.5"
    },
    "os_family": "Mac",
    "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36"
  }
  let [browserInfo,setBrowserInfo]=useState(information)
  useEffect( () => {
  console.log("run only first Time")
  getData()
  getBrowserInfo()
  }, [])
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

  

const getBrowserInfo=()=>{
  console.log("Browser Details API  loading...")
  setLoading(true)
  fetch('https://api.apicagent.com/?ua=Mozilla/5.0%20(Macintosh;%20Intel%20Mac%20OS%20X%2010_15_5)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/89.0.4389.114%20Safari/537.36')
  .then( (response) => {
  response.json().then( (data) => {
    setBrowserInfo(data)
  console.log(data)
  })
  })
  }



  return (
    <div className="App">
    <div className='maindiv'>
       <div className="subdiv">
            <div><span>Browser Family :</span><span className='weight'>{browserInfo.browser_family}</span></div>
            <div><span>Browser Version :</span><span className='weight'>{browserInfo.client.version}</span></div>
            <div><span>Browser Device type :</span><span className='weight'>{browserInfo.device.type}</span></div> 
            <div><span>Browser OS :</span><span className='weight'>{browserInfo.os.name}</span></div>
            <div><span>Browser OS family :</span><span className='weight'>{browserInfo.os_family}</span></div>
            <div><span>User Agent :</span><span className='weight'>{browserInfo.user_agent}</span></div>
      </div>
      <div className="subdiv rightSide" >
              No. of Visitors of Our Website :  <h1>{count}</h1>
        </div>
    </div>
    
        </div>)
}

export default App;
