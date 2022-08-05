import { useState } from 'react'
export default function Counter(){
    const [count, setCounter] = useState(0)
    return (
        <> 
        <div className="counter">Counter: {count}</div>

        <div className='button-container'>
        <button onClick={()=> {
            setCounter(count + 1)
        }}>add</button>
        <button onClick={() => {
            setCounter(0)
        }}>reset</button>
        <button onClick={()=>{
            if (count > 0) {
                setCounter(count -1)
            }
        }}>subtract</button>
        </div>
        </>
    )
}