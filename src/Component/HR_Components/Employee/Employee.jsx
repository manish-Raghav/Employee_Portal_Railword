import React, { useEffect, useState } from 'react'
import { CiUser } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import EmpData from './EmpData';

import { Back } from  '../../../Data/Backend';
import { FaUsers } from "react-icons/fa";
import AddEmployee from './AddEmployee';
import { Front } from '../../../Data/Fronend';







// className={`nav-link ${
//   activeLink === "Dashboard" ? "active" : "text-dark"
// }`}
// aria-current={activeLink === "Dashboard" ? "page" : undefined}
// onClick={() => handleSetActive("Dashboard")}




const Employee = () => {
    const [st,setst] =useState(false)
    const [data,setdata] = useState([]);
    const [isActive, setIsActive] = useState(true);
    const [formisActive ,setformisActive] =  useState(true)
    const [activeLink, setActiveLink] = useState("frontend");




    useEffect(()=>{
      setdata(Front);
      setst(true)
    },[])
    
   const Fnt =()=>  {
    setdata(Front);
    setst(true)
          

    }
    const bkt =()=>  {
        setdata(Back);
      setst(false)

}
const dsg =()=>  {
    setdata(Front);
  setst(false)

}
const mybt = () =>{
  setIsActive(false);
  setformisActive(false);
}
  
    

  return (

    <section className=' w-[73.5vw]    z-40 relative left-[1.6rem] top-16  p-3   '>
     {
        st ? <div className='bg-violet-600 w-48 gap-2 flex h-14 items-center  justify-center rounded-md absolute top-0 bottom-8 right-4 cursor-pointer'>

        {
          isActive ? <div className='flex text-center justify-center'>
           <div className='p-1'>
        <IoIosAddCircleOutline className='text-white ' size={20} />
        </div>

        <div className='text-white text-[1rem]'>
        <button onClick={mybt} >Add New Employee</button>
        </div>
        </div> 
        :   <div className='flex text-center justify-center'>
           <div className='p-1'>
        <FaUsers  className='text-white ' size={20} />
        </div>

        <div className='text-white text-[1rem]'>
        <button >View All Employee</button>
        </div>
        </div> 
           
        }
       
        
        </div>
        
        : null 
     }
        
        
    {
      formisActive ?  <div className='h-[40rem] bg-white w-auto relative top-8  bottom-3  rounded-lg shadow-lg'>
      <div className='flex  bg-white border-b-[1px] border-zinc-400 rounded-lg h-16 justify-between z-10 items-center relative p-2 '>  
         <div className='flex gap-2 cursor-pointer hover:text-violet-600 focus:text-violet-600 '>
            <div className='mt-1  '>
            <FaUser  className=' text-lg '/>
            </div>
        
           <div className=''>
             <h1 
               className={'font-semibold text-lg '}
                 onClick={() => Fnt()}
             >
              Frontend
            </h1>
          </div>
           
        </div>


        <div className='flex gap-2 cursor-pointer hover:text-violet-600 focus:text-violet-600'>
            <div className='mt-1'>
            <FaUser  className=' text-lg'/>
            </div>
        
           <div>
             <h1 className='font-semibold text-lg focus:bg-violet-600  focus:underline ' onClick={bkt}>
              Backend
            </h1>
          </div>
           
        </div>

        <div className='flex gap-2 cursor-pointer hover:text-violet-600 focus:text-violet-600'>
            <div className='mt-1'>
            <FaUser  className=' text-lg'/>
            </div>
        
           <div>
             <h1 className='font-semibold text-lg focus:bg-violet-600  focus:underline' onClick={dsg}>
          Designing
            </h1>
          </div>
           
        </div>
       

        <div className='flex gap-2 cursor-pointer'>
            <div className='mt-1'>
            <FaUser  className=' text-lg'/>
            </div>
        
           <div>
             <h1 className='font-semibold text-lg'>
              HR
            </h1>
          </div>
           
        </div>



        <div className='flex gap-2 cursor-pointer'>
            <div className='mt-1'>
            <FaUser  className=' text-lg'/>
            </div>
        
           <div>
             <h1 className='font-semibold text-lg'>
             Senior_Employee
            </h1>
          </div>
           
        </div>
        
      

      </div>
      <div className='mt-6'>
           <EmpData data ={data}  />
      </div>
      </div>
      :
      <div className=''>
          <AddEmployee  setformisActive={setformisActive}  setIsActive={setIsActive}  />
      </div>
    }
     




    </section>
  )
}

export default Employee
