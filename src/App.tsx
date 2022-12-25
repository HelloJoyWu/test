import { useState } from 'react'
import '../assets/css/app.scss'
import userImg from '../assets/res/img/username.png'
import passwordImg from '../assets/res/img/password.png'

function App() {
  // const [count, setCount] = useState<number>(0)

  return (
    <div className="bodyBox">
      <div className='bodyBox bodyBox--backimgBox'>
        <div className='bodyBox--leftBox'>
          <div className='bodyBox--inputBox'>
            <img src={userImg} />
            <input type='text' className='bodyBox--inputText' placeholder='email or username' />
          </div>
          <div className='bodyBox--inputBox'>
            <img src={passwordImg} />
            <input type='password' className='bodyBox--inputText' placeholder='password' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
