import './App.css'
import { useState } from 'react'
React

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    else {
      setMessage("これ以上は減らせません！！")
    }
  }

  return (
    <>
      <h1>カウントアプリ</h1>
      <p>現在のカウント：{count}</p>
      <button onClick={() => { setCount(count + 1); setMessage(""); }}>+1</button>
      <button onClick={handleClick}>-1</button>
      <button onClick={() => { setCount(0); setMessage(""); }}>reset</button>

      {message && <p role='alert' style={{color:"red"}}>{message}</p>}
    </>
  )
}

export default App