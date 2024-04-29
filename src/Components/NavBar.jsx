import { useState } from 'react';
import '../App.css'
import DownArrow from '../assets/downarrow.svg'
import DownArrowLight1 from '../assets/DownArrowLight1.svg'
import DownArrowLight2 from '../assets/DownArrowLight2.svg'
import sagae from '../assets/sagae.svg'
import Create from '../assets/Create.svg'
import CreateLight1 from '../assets/CreateLight1.svg'
import CreateLight2 from '../assets/CreateLight2.svg'
import Close from '../assets/Close4E.svg'
import CloseLight1 from '../assets/CloseC9.svg'

const bots=[
  {
      name:'Colabot',
      icon:sagae,
      style:'mt-2',

  },
  {
      name:'Sagae President',
      icon:sagae,
      style:'mt-4',

  },
  {
      name:'Speech Text',
      icon:sagae,
      style:'mt-4',

  },
  {
      name:'Example bot1',
      icon:sagae,
      style:'mt-4',

  },
  {
    name:'Example 2',
    icon:sagae,
    style:'mt-2',

},
{
    name:'Example 3',
    icon:sagae,
    style:'mt-4',

},
{
    name:'Example 4',
    icon:'/',
    style:'mt-4',

},
{
    name:'Example 5',
    icon:'/',
    style:'mt-4',

},
{
  name:'Example 6',
  icon:'/',
  style:'mt-4',

},
{
  name:'Example 7',
  icon:'/',
  style:'mt-4',

},
];

const histories=[
  {
      botName:'Example bot 1',
      chatName:'Colabot1',
      date:'',
      style:'mt-2',
  },
  {
      botName:'Example bot 1',
      chatName:'Colabot2',
      date:'',
      style:'mt-2',

  },
  {
      botName:'Example bot 1',
      chatName:'Colabot3',
      date:'',
      style:'mt-2',
  },
//   {
//       botName:'Example bot 1',
//       chatName:'Colabot4',
//       date:'',
//       style:'mt-2',

//   },
//   {
//       botName:'Example bot 1',
//       chatName:'Colabot5',
//       date:'',
//       style:'mt-2',
// },
// {
//       botName:'Example bot 1',
//       chatName:'Colabot6',
//       date:'',
//       style:'mt-2',
// },
// {
//       botName:'Example bot 1',
//       chatName:'Colabot7',
//       date:'',
//       style:'mt-2',

// },
// {
//       botName:'Example bot 1',
//       chatName:'Colabot8',
//       date:'',
//       style:'mt-2',

// },
];

const NavBar = (props) => {
  const {changeTheme,mode,upperMenus,setUpperMenus,navMinimize,setNavMinimize}=props.passProps;
  // const [navMinimize,setNavMinimize]=useState(false);
  const [expand,setExpand]=useState(false);

  const minimizeNav=()=>{
    setNavMinimize(prev=>!prev);
  }

  return (
    <div>
     { !navMinimize ? 
    (<div className={mode==='dark' ? 'drop-shadow-md h-screen w-72 bg-nav-black border-r border-zinc-700 shadow-xl':'drop-shadow-md h-screen w-72 bg-white border-r shadow-xl'}>
      <div className='flex justify-between pt-2'>
      <div className={mode==='dark' ? 'text-white ml-2':'text-black ml-2'}>Colabot</div>

    <div className='mr-2'>
      <div onClick={minimizeNav}>
        <img className='w-4 h-4 opacity-80' src={mode==='light1'? CloseLight1 :mode==='light2'? CloseLight1 :mode==='light3'? CloseLight1:Close}/>
      {/* <div className={mode==='light1'? 'bg-blue-color w-5 h-0.5 m-1':mode==='light2'? 'bg-purple-color w-5 h-0.5 m-1': 'bg-gold-color w-5 h-0.5 m-1'}></div>
         <div className={mode==='light1'? 'bg-blue-color w-5 h-0.5 m-1':mode==='light2'? 'bg-purple-color w-5 h-0.5 m-1': 'bg-gold-color w-5 h-0.5 m-1'}></div>
         <div className={mode==='light1'? 'bg-blue-color w-5 h-0.5 m-1': mode==='light2'? 'bg-purple-color w-5 h-0.5 m-1': 'bg-gold-color w-5 h-0.5 m-1'}></div> */}
      </div>
      </div>
      </div>
      <div className={mode==='dark' ? 'text-white ml-2':'text-black ml-2'}>Impact Holding Company</div>
      <div className={mode==='dark' ? 'text-white ml-2 mt-10':'text-black ml-2 mt-10'}>Bots</div>
      <div className={expand ? 'h-72 overflow-y-auto':'h-40'}>{
        bots.map((item,index)=>(
          <div key={item.name} className={mode==='dark' ? 'mt-2 flex items-center group/item':'mt-2 flex items-center group/item hover:bg-main-content-light'}> 
          <div className={!expand && index>3 ? 'invisible m-2':'visible m-2'}><img className="w-6 h-6" src={item.icon}/></div>
          <div style={{ color: mode==='dark' ? 'white' :'black' }} className={!expand && index>3 ? 'invisible  text-sm':'visible m-2  text-sm'}>{item.name}</div>
          <div className={!expand && index>3 ? 'invisible group/edit group-hover/item:invisible ml-auto mr-2':'invisible m-2 group/edit group-hover/item:visible ml-auto mr-2'} >
            <img className='w-5 h-5' src={mode==='light1' ? CreateLight1 : mode==='light2' ? CreateLight2: Create}/></div>
          </div>
        ))
      }</div>
      <div className={'flex justify-end mr-2 mb-2 mt-4'}>
        <img className="w-4 h-4" src={mode==="light1" ? DownArrowLight1 : mode==="light2" ? DownArrowLight2: DownArrow} onClick={()=>setExpand((prev=>!prev))}/>
      </div>
      <div className={mode==="dark" ? 'w-full border-b border-zinc-700':'w-full border-b'}/>
  {/* Chat Histories */}
  <div className='relative bg-gray-700 mt-2'>
      </div>
  <div className=''>
  <div className={mode==='dark'? 'text-white ml-2':'text-black ml-2'}>Chat Histories</div>
  </div>
    <div className={mode==='light1'? 'text-blue-color  ml-2 mt-2 text-sm' :mode==='light2'? 'text-purple-color ml-2 mt-2 text-sm':'text-gold-color ml-2 mt-2 text-sm'}>Today</div>
    <div className={expand ?'h-40':'h-72 '}>
    <div className=''>{
        histories.map((item,index)=>(
          index<2 && 
          <div key={item.chatName} className={index!==0 ?'mt-2 flex items-cente': 'flex items-center'}>
            <div className='w-full flex flex-col'>
            <div className={mode==='dark' ? 'text-white text-sm pl-4 p-2':'text-black text-sm pl-4 p-2'}>{item.botName}</div>
          <div className={mode==='dark' ?'text-white text-sm pl-4 p-2 hover:bg-main-content':'text-black text-sm pl-4 p-2 hover:bg-white'}>{item.chatName}</div>
          </div>
          </div>
        ))
      }
    </div>

    <div className={mode==='light1'? 'text-blue-color  ml-2 mt-2 text-sm' :mode==='light2'? 'text-purple-color ml-2 mt-2 text-sm':'text-gold-color ml-2 mt-2 text-sm'}>Yesterday</div>
    <div className=''>{
        histories.map((item,index)=>(
          index>=2 && 
          <div key={item.chatName} className={index!==0 ?'mt-2 flex items-center': 'flex items-center'}>
            <div className='w-full flex flex-col'>
            <div className={mode==='dark'? 'text-white text-sm pl-4 p-2':'text-black text-sm pl-4 p-2'}>{item.botName}</div>
          <div className={mode==='dark' ? 'text-white text-sm pl-4 p-2 hover:bg-main-content':'text-black text-sm pl-4 p-2 hover:bg-white'}>{item.chatName}</div>
          </div>
          </div>
        ))
      }
    </div>
    </div>
    </div>):

       (
      //  <div className={mode==='dark' ? 'h-screen w-10 bg-nav-black flex justify-center border-r border-zinc-700':'h-screen w-10 bg-white flex justify-center border-r'}>
      //   <div onClick={()=>setNavMinimize(prev=>!prev)} className='pt-2'>
      //    <div className={mode==='light1'? 'bg-blue-color w-5 h-0.5 m-1':changeTheme && mode==='light2'? 'bg-purple-color w-5 h-0.5 m-1': 'bg-gold-color w-5 h-0.5 m-1'}></div>
      //    <div className={mode==='light1'? 'bg-blue-color w-5 h-0.5 m-1':changeTheme && mode==='light2'? 'bg-purple-color w-5 h-0.5 m-1': 'bg-gold-color w-5 h-0.5 m-1'}></div>
      //    <div className={mode==='light1'? 'bg-blue-color w-5 h-0.5 m-1':changeTheme && mode==='light2'? 'bg-purple-color w-5 h-0.5 m-1': 'bg-gold-color w-5 h-0.5 m-1'}></div>
      //  </div>
      //  </div>
      <div></div>
       )
    }
    </div>
  )
}

export default NavBar
