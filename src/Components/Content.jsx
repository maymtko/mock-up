import React from 'react'
import '../App.css'
import sagae from '../assets/sagae.svg'

const Content = (props) => {
    const {changeTheme,setChangeTheme}=props.passProps;

  return (
    <div className={changeTheme? 'pl-4 bg-main-content-light h-screen w-full overflow-y-auto':'pl-2 bg-main-content h-screen w-full overflow-y-auto'}>
      <div className={changeTheme ? 'text-black pt-4 font-bold':'text-white pt-4 font-bold'}>
        Impact Holding Company Bots
      </div>

        <div className='grid lg:grid-cols-[20%_20%_20%_20%] md:grid-cols-3  sm:grid-cols-2 xs:grid-cols-1 gap-2'>
      <div  className={changeTheme ? ' bg-card-color-light border border-gold-color rounded-md overflow-y-auto':' bg-bot-card-color border border-gold-color rounded-md overflow-y-auto'}>
        <div className='flex'>
            <div>
            <div className='bg-slate-500 rounded-full w-14 h-14 m-2'>
                <img src={sagae} className=''/>
            </div>
            </div>
            <div>
            <div className={changeTheme? 'm-2 flex flex-col text-black h-24 overflow-y-auto overflow-x-hidden':'m-2 flex flex-col text-white h-24 overflow-y-auto overflow-x-hidden'}>
                <div>
                Sagae President
                </div>
                <div>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                </div>
            </div>
            </div>
        </div>

      </div>
      </div>


      <div className={changeTheme ? 'text-black pt-4 font-bold':'text-white pt-4 font-bold'}>
        Company Bots
      </div>
      <div className='grid lg:grid-cols-[20%_20%_20%_20%] md:grid-cols-3  sm:grid-cols-2 xs:grid-cols-1 gap-2'>
      <div  className={changeTheme ? ' bg-card-color-light border border-gold-color rounded-md overflow-y-auto':' bg-bot-card-color border border-gold-color rounded-md overflow-y-auto'}>
        <div className='flex'>
            <div>
            <div className='bg-slate-500 rounded-full w-14 h-14 m-2'>
                <img src="/" className='m-4'/>
            </div>
            </div>
            <div>
            <div className={changeTheme? 'm-2 flex flex-col text-black h-24 overflow-y-auto overflow-x-hidden':'m-2 flex flex-col text-white h-24 overflow-y-auto overflow-x-hidden'}>
                <div>
                Speech to Text Bot
                </div>
                <div>
                   This is speech to text bot.
                </div>
            </div>
            </div>
        </div>

      </div>


      <div  className={changeTheme ? ' bg-card-color-light border border-gold-color rounded-md overflow-y-auto':' bg-bot-card-color border border-gold-color rounded-md overflow-y-auto'}>
        <div className='flex'>
            <div>
            <div className='bg-slate-500 rounded-full w-14 h-14 m-2'>
                <img src="/" className='m-4'/>
            </div>
            </div>
            <div>
            <div className={changeTheme? 'm-2 flex flex-col text-black h-24 overflow-y-auto overflow-x-hidden':'m-2 flex flex-col text-white h-24 overflow-y-auto overflow-x-hidden'}>
                <div>
                Customer Supporter Bot
                </div>
                <div>
                   This is customer supporter bot.
                </div>
            </div>
            </div>  
        </div>
        </div>
        
        {/* w-72 h-32 */}
        <div  className={changeTheme ? ' bg-card-color-light border border-gold-color rounded-md overflow-y-auto':' bg-bot-card-color border border-gold-color rounded-md overflow-y-auto'}>
        <div className='flex'>
            <div>
            <div className='bg-slate-500 rounded-full w-14 h-14 m-2'>
                <img src="/" className='m-4'/>
            </div>
            </div>
            <div>
            <div className={changeTheme? 'm-2 flex flex-col text-black h-24 overflow-y-auto overflow-x-hidden':'m-2 flex flex-col text-white h-24 overflow-y-auto overflow-x-hidden'}>
                <div>
                New Project Bot
                </div>
                <div>
                   This is new project bot 
                </div>
            </div>
         </div>
        </div>
        </div>
  

        <div  className={changeTheme ? ' bg-card-color-light border border-gold-color rounded-md overflow-y-auto':' bg-bot-card-color border border-gold-color rounded-md overflow-y-auto'}>
        <div className='flex'>
            <div>
            <div className='bg-slate-500 rounded-full w-14 h-14 m-2'>
                <img src="/" className='m-4'/>
            </div>
            </div>
            <div>
            <div className={changeTheme? 'm-2 flex flex-col text-black h-24 overflow-y-auto overflow-x-hidden':'m-2 flex flex-col text-white h-24 overflow-y-auto overflow-x-hidden'}>
            <div>
                Customer Supporter Bot
                </div>
                <div>
                   This is customer supporter bot1.
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>


            <div className={changeTheme ? 'text-black pt-4 font-bold':'text-white pt-4 font-bold'}>
                    Group Bots
                </div>
                <div className={changeTheme ? 'text-black ml-2 mb-4 font-bold':'text-white ml-2 mb-4 font-bold'}>
                Development Group
                </div>
      <div className='grid lg:grid-cols-[20%_20%_20%_20%] md:grid-cols-3  sm:grid-cols-2 xs:grid-cols-1 gap-2'>
      <div  className={changeTheme ? ' bg-card-color-light border border-gold-color rounded-md overflow-y-auto':' bg-bot-card-color border border-gold-color rounded-md overflow-y-auto'}>
        <div className='flex'>
            <div>
            <div className='bg-slate-500 rounded-full w-14 h-14 m-2'>
                <img src="/" className='m-4'/>
            </div>
            </div>
            <div>
            <div className={changeTheme? 'm-2 flex flex-col text-black h-24 overflow-y-auto overflow-x-hidden':'m-2 flex flex-col text-white h-24 overflow-y-auto overflow-x-hidden'}>
                <div>
                Programming Bot
                </div>
                <div>
                   This is programming bot 
                </div>
            </div>
            </div>
        </div>

      </div>


      <div  className={changeTheme ? ' bg-card-color-light border border-gold-color rounded-md overflow-y-auto':' bg-bot-card-color border border-gold-color rounded-md overflow-y-auto'}>
        <div className='flex'>
            <div>
            <div className='bg-slate-500 rounded-full w-14 h-14 m-2'>
                <img src="/" className='m-4'/>
            </div>
            </div>
            <div>
            <div className={changeTheme? 'm-2 flex flex-col text-black h-24 overflow-y-auto overflow-x-hidden':'m-2 flex flex-col text-white h-24 overflow-y-auto overflow-x-hidden'}>
                <div>
                New Project Bot
                </div>
                <div>
                   This is new project bot 
                </div>
            </div>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Content
