import React from 'react'

    const menus=[{
        id:'dark',
        name:'Dark Mode'
    },{
        id:'light1',
        name:'Light Mode 1'
    },{
        id:'light2',
        name:'Light Mode 2'
    },{
        id:'light3',
        name:'Light Mode 3'
    }];

const ThemePopup = (props) => {
    const {changeTheme,setMode,mode,setChangeTheme}=props.passProps;
    const changeMode=(id)=>{
        setMode(id);
        setChangeTheme(false);
      }
  return (
    <div>
    { 
        changeTheme &&
        <div className={mode==="dark" ? 'w-40 h-40 bg-main-content text-white left-12 top-3/4 absolute border border-nav-border':'w-40 h-40 bg-white left-12 top-3/4 absolute border border-zinc-300'}>
        <div>
        {  menus.map((menu)=>(
                <li key={menu.id} onClick={()=>changeMode(menu.id)} className={mode==="light1" ? 'p-2 cursor-pointer rounded-sm hover:bg-blue-color list-none': mode==="light2" ? 'p-2 cursor-pointer rounded-sm hover:bg-purple-color list-none':'p-2 cursor-pointer rounded-sm hover:bg-gold-color list-none'}>{menu.name}</li>
            ))}
        </div>
        </div>
    }
  </div>
    )
}

export default ThemePopup
