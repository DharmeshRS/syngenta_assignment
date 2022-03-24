// import React, { useEffect, useState } from 'react'

// const Browser = () => {
//   let [browserInfo,setBrowserInfo]=useState()
//   useEffect(() => {
//     console.log("run only first Time")
//     getBrowserInfo()
//     console.log("browserInfo",browserInfo)
//     }, [])
//   const getBrowserInfo=()=>{
//     console.log("Browser Details API  loading...")
//     fetch('https://api.apicagent.com/?ua=Mozilla/5.0%20(Macintosh;%20Intel%20Mac%20OS%20X%2010_15_5)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/89.0.4389.114%20Safari/537.36')
//   .then( (response) => {
//   response.json()
//   .then( (data) => {
//   // console.log(data)
//   setBrowserInfo(data)
//   console.log(data)
//   })
//   })

// }

// let {browser_family}=browserInfo;

//   return (
//     <div>
//       <div className="subdiv">
//       {browser_family}
//             {/* <div><span>Browser Family :</span><span>{browserInfo.browser_family}</span></div>
//             <div><span>Browser Version :</span><span>{browserInfo.client.version}</span></div>
//             <div><span>Browser Device type :</span><span>{browserInfo.device.type}</span></div> 
//             <div><span>Browser OS :</span><span>{browserInfo.os.name}</span></div>
//             <div><span>Browser OS family :</span><span>{browserInfo.os_family}</span></div>
//             <div><span>User Agent :</span><span>{browserInfo.user_agent}</span></div> */}
//       </div>
//     </div>
//   )
// }

// export default Browser