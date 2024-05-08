import React from 'react'

const Total = () => {
  return (
    <div id='box' className='flex justify-between'>
        <div id="tipAmount">
            <p>Tip Amount</p>
            <span className='text-Grayish_cyan'>/ Person</span>
        </div>
        <div>
            <span id="amount" className='text-4xl text-Strong_cyan font-semibold'>0.00</span>
        </div>
    </div>
  )
}

export default Total