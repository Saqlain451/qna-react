import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
let Card = (props) => {
  const [show, setShow] = useState(false)
  let click = () => {
    if (show === false) {
      setShow(true)
    } else { setShow(false) }
  }
  return (
    < >
      <div className='card mt-3'>
        <div className='ques'>
          <button className='btn ms-2' onClick={click}>{show ? '−' : '+'}</button>
          {props.ques}
        </div>
        {
          show ? <div className='ans'>
            <p className='ms-2'>{props.ans}</p>
          </div> : ''
        }

      </div>
    </>
  )
}
export default Card;