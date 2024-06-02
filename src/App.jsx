import { useState } from 'react'
import Employee from './Component/Employee'
import Header from './Component/Header'
import Sidebar from './Component/Sidebar'
import { MdClass } from 'react-icons/md'
import AddEmployee from './Component/AddEmployee'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className='bg-slate-300 h-auto'> 
    <Header />
    <Employee />
    </div>
    </>
  )
}

export default App
