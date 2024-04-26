import React from 'react'
import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import SideNav from './Components/SideNav'
import Content from './Components/Content'

const App = () => {
  const[changeTheme,setChangeTheme]=useState(false);
  const passProps={
    changeTheme,
    setChangeTheme
  };
  return (
    // <div className='flex flex-row'>
    // // <div className='bg-slate-300 flex-none'>
    // <div>
    //   <SideNav/>
    //  </div>
    // <div className="w-auto">
    //   <div className='flex'>
    //   <NavBar/>
    //   <Content/>
    //   </div>
    //  </div>
    // </div>
    // </div>
     // <div className='bg-slate-300 flex-none'>
     <div className='flex'>
     <SideNav passProps={passProps} />
     <NavBar passProps={passProps}/>
     <Content passProps={passProps}/>
     </div>
  )
}

export default App
