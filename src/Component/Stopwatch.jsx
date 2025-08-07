import React, { useRef, useState } from 'react'

const Stopwatch = () => {
  const [lap,setlap] = useState([])
    const [time,settime] = useState(0)
    let intervalRef = useRef(null)
    let StopwatchRef = useRef(0)

    function handleStart (){
        StopwatchRef.current = new Date().getTime()-time

        intervalRef.current = setInterval(() => {
            settime(new Date().getTime()-StopwatchRef.current)
        }, 10);

    }
    function handlePause (){
      clearInterval(intervalRef.current)
    }
    function handleReset (){
      clearInterval(intervalRef.current)
      settime(0)
    }
    function handleLap (){
      setlap(prev => ([...prev,formateTime()]))
    
      console.log(lap)
    }
    function formateTime (){
      const ms = Math.floor((time%1000)/10).toString().padStart(2,0)
      const s = Math.floor((time/1000)%60).toString().padStart(2,0)
      const m  = Math.floor((time/(1000*60))%60).toString().padStart(2,0)
      const h = Math.floor(time/(1000*60*60)).toString().padStart(2,0)
      return `${h}:${m}:${s}:${ms}`
    }
  return (
    <>
      <span>{formateTime()}</span>
      <div>
        <button  onClick={handleStart}>start</button>
        <button onClick={handlePause}>pause</button>
        <button onClick={handleReset}>reset</button>
        <button onClick={handleLap}>Lap</button>
      </div>

      <div>
        {lap?.map((e,i)=>(
          <div>
            <span>{e}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default Stopwatch
