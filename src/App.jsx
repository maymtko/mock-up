import React from 'react'
import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import SideNav from './Components/SideNav'
import Content from './Components/Content'
import ThemePopup from './Components/ThemePopup'
const upperMenuss=[
  {
    name:'Burger',
    style:'mt-2 mb-2',

},
  {
      name:'Logo',
      style:'mt-2 mb-2',

  },
  {
      name:'Chat',
      style:'mt-4',

  },
  {
      name:'Bot',
      style:'mt-4',

  },
  {
      name:'Minute',
      style:'mt-4',

  },
  {
      name:'Save',
      style:'mt-4',

  }
];
const App = () => {
  const[changeTheme,setChangeTheme]=useState(false);
  const [mode,setMode]=useState('dark');
  const [upperMenus,setUpperMenus]=useState(upperMenuss);
  const [navMinimize,setNavMinimize]=useState(false);

  const passProps={
    upperMenus,
    setUpperMenus,
    changeTheme,
    setChangeTheme,
    mode,setMode,
    navMinimize,setNavMinimize
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
     <ThemePopup passProps={passProps} />

     </div>
  )
}

export default App
