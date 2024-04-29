import React, { useState } from 'react';
import Burger from '../assets/Burger.svg'
import BurgerLight1 from '../assets/BurgerLight1.svg'
import BurgerLight2 from '../assets/BurgerLight2.svg'
import Logo from '../assets/Logoii.png'
import LogoLight1 from '../assets/LogoLight1.png'
import LogoLight2 from '../assets/LogoLight2.png'
import Vector from '../assets/Vector.svg'
import ChatLight1 from '../assets/ChatLight1.svg'
import ChatLight2 from '../assets/ChatLight2.svg'
import Bot from '../assets/Bot.svg'
import Noti from '../assets/noti.svg'
import NotiLight1 from '../assets/NotiLight1.svg'
import NotiLight2 from '../assets/NotiLight2.svg'
import Reschedule from '../assets/Reschedule.svg'
import RescheduleLight1 from '../assets/RescheduleLight1.svg'
import RescheduleLight2 from '../assets/RescheduleLight2.svg'
import Create from '../assets/Create.svg'
import User from '../assets/User.svg'
import UserLight1 from '../assets/UserLight1.svg'
import UserLight2 from '../assets/UserLight2.svg'
import BotLight1 from '../assets/BotLight1.svg'
import BotLight2 from '../assets/BotLight2.svg'
import Theme from '../assets/theme.svg'
import ThemeLight1 from '../assets/ThemeLight1.svg'
import ThemeLight2 from '../assets/ThemeLight2.svg'
import Bookmark from '../assets/Bookmark.svg'
import BookmarkLight1 from '../assets/BookmarkLight1.svg'
import BookmarkLight2 from '../assets/BookmarkLight2.svg'


// const upperMenus=[
//     {
//         name:'Logo',
//         style:'mt-2 mb-2',

//     },
//     {
//         name:'Chat',
//         style:'mt-4',

//     },
//     {
//         name:'Bot',
//         style:'mt-4',

//     },
//     {
//         name:'Minute',
//         style:'mt-4',

//     },
//     {
//         name:'Save',
//         style:'mt-4',

//     }
// ];

const lowerMenus=[
    {
        name:'Noti',
        style:'mt-4',

    },
    {
        name:'Theme',
        style:'mt-4',

    },  {
        name:'Account',
        style:'mt-4 mb-4',

    }
];
const iconPaths = {
    'Burger':Burger,
    'BurgerLight1':BurgerLight1,
    'BurgerLight2':BurgerLight2,
    'Logo':Logo,
    'LogoLight1':LogoLight1,
    'LogoLight2':LogoLight2,
    'Chat':Vector,
    'ChatLight1':ChatLight1,    
    'ChatLight2':ChatLight2,
    'Bot':Bot,
    'BotLight1':BotLight1,
    'BotLight2':BotLight2,
    'Minute':Reschedule,
    'MinuteLight1':RescheduleLight1,
    'MinuteLight2':RescheduleLight2,
    'SaveLight1':BookmarkLight1,
    'SaveLight2':BookmarkLight2,
    'Save':Bookmark,
    'Noti':Noti,
    'NotiLight1':NotiLight1,
    'NotiLight2':NotiLight2,
    'Theme':Theme,
    'ThemeLight1':ThemeLight1,
    'ThemeLight2':ThemeLight2,
    'Account':User,
    'AccountLight1':UserLight1,
    'AccountLight2':UserLight2,
  };

const SideNav = (props) => {
    const {upperMenus,changeTheme,setChangeTheme,mode,setMode,navMinimize,setNavMinimize}=props.passProps;

    const changeIconColor = (iconName) => {
        const iconPath = mode==='light1'? iconPaths[iconName+'Light1']: mode==='light2'?  iconPaths[iconName+'Light2']:iconPaths[iconName];
        return iconPath; 
      };

    const clickMenu=(menuName)=>{
        if(menuName==='Theme'){
           setChangeTheme(prev=>!prev);
        }else if(menuName==='Burger'){
            setNavMinimize(prev=>!prev);
        }

    }

  return (
    <div className={mode==="dark" ? ' bg-nav-black h-screen w-12 border-solid border-r border-zinc-700 drop-shadow-sm':' bg-white h-screen w-12 border-r drop-shadow-sm'}>
      <div className='flex flex-col justify-between h-full'>
      <div className='flex flex-col justify-center'>
       { upperMenus?.map((item)=>(
            <div key={item.name} className={item.style}>
                <img className={item.name==="Burger"? "w-5 h-5 ml-3":"w-6 h-6 ml-3"} src={changeIconColor(item.name)}  onClick={()=>clickMenu(item.name)}/>
                <div className={mode==="dark" ? 'text-xs text-white text-center':'text-xs text-black text-center'}>{item.name==="Burger" ? '':item.name}</div>
            </div>
        ))}
      </div>
      <div className=''>
      { lowerMenus.map((item)=>(
            <div key={item.name} className={item.style}>
                <img className="w-6 h-6 ml-3 fill-slate-600" src={changeIconColor(item.name)} onClick={()=>clickMenu(item.name)}/>
                <div className={mode==="dark" ? 'text-xs text-white text-center':'text-xs text-black text-center'}>{item.name}</div>
            </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default SideNav
