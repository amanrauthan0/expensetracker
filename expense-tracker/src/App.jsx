import { useState } from 'react'
import './App.css'
import { Input } from './components/Input'
import { Summary } from './components/Summary'
import {Graph} from './components/Graph'
function App() {

  const[log,setlog]=useState([]);
  return (
    <div className='min-h-screen bg-gray-100 p-8'>

  <h1 className='text-4xl font-bold text-gray-800 mb-8 text-center'>
      Expense Tracker
  </h1>

  <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-8'>

      <Input log={log} setlog={setlog}/>
      <div className="flex flex-col gap-4">
        <Summary log={log}/>
        <Graph log={log}/>
      </div>
  </div>

</div>
  )
}

export default App
