import React, { useState } from 'react';
import Logo from '../assets/Logoi.svg'
import Vector from '../assets/Vector.svg'
import Bot from '../assets/Bot.svg'
import Noti from '../assets/noti.svg'
import Reschedule from '../assets/Reschedule.svg'
import Create from '../assets/Create.svg'
import User from '../assets/User.svg'
import Theme from '../assets/theme.svg'
import Bookmark from '../assets/Bookmark.svg'


const upperMenus=[
    {
        name:'',
        icon:Logo,
        style:'mt-2 mb-2',

    },
    {
        name:'Chat',
        icon:Vector,
        style:'mt-4',

    },
    {
        name:'Bot',
        icon:Bot,
        style:'mt-4',

    },
    {
        name:'Minute',
        icon:Reschedule,
        style:'mt-4',

    },
    {
        name:'Save',
        icon:Bookmark,
        style:'mt-4',

    }
];

const lowerMenus=[
    {
        name:'Noti',
        icon:Noti,
        style:'mt-4',

    },
    {
        name:'Theme',
        icon:Theme,
        style:'mt-4',

    },  {
        name:'Account',
        icon:User,
        style:'mt-4 mb-4',

    }
];

const SideNav = (props) => {
    const {changeTheme,setChangeTheme}=props.passProps;

    const clickMenu=(menuName)=>{
        if(menuName==='Theme'){
           setChangeTheme(prev=>!prev);
        }

    }

  return (
    <div className={changeTheme ? 'bg-nav-white h-screen w-14 border-solid border-r border-white' : 'bg-nav-black h-screen w-14 border-solid border-r border-zinc-700'}>
      <div className='flex flex-col justify-between h-full'>
      <div className=''>
       { upperMenus.map((item)=>(
            <div key={item.name} className={item.style}>
                <img className="w-6 h-6 ml-3" src={item.icon}/>
                <div className={changeTheme ? 'text-xs text-black text-center':'text-xs text-white text-center'}>{item.name}</div>
            </div>
        ))}
      </div>
      <div className=''>
      { lowerMenus.map((item)=>(
            <div key={item.name} className={item.style}>
                <img className="w-6 h-6 ml-3" src={item.icon} onClick={()=>clickMenu(item.name)}/>
                <div className={changeTheme ? 'text-xs text-black text-center':'text-xs text-white text-center'}>{item.name}</div>
            </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default SideNav
