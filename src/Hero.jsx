import React from 'react'



function Hero() {
  const [count, setCount] = useState(0)
  return (
    <div id="Hero">
      <h1>Hi there!</h1>
      <div id="ButtonDiv">
        <button onClick={() => setCount((count) => count+1 )}>
          
          Counter:{count}</button>
        <button>Reset counter</button>
      </div>
          

    </div>
  )
}

export default Hero