import React, {useState} from 'react'

export default function AddOne() {
    // const, let, var codecademy.js
    const [num, setNum] = useState(0) 
    return (
        <div>
            {num}
            <button 
                onClick={()=>{ //arrow function
                    var x = num
                    x =x+1
                    setNum(x)
                }}
            >Add 1</button>
        </div>
    )
}
