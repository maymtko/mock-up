import React from 'react'
import '../App.css'
import sagae from '../assets/sagae.svg'
import CustomerSupport from '../assets/arlington-research-Kz8nHVg_tGI-unsplash.jpg'
import ProgrammingBot from '../assets/programmingbot.jpeg'
import SpeechToTextBot from '../assets/customer_support.avif'
import CustomerSupport1 from '../assets/customer_support1.jpeg'
import NewProject from '../assets/newproj.jpeg'
import NewProject1 from '../assets/new_project.jpeg'
import ExampleBot from '../assets/ExampleBot.jpg'
import ExampleBot1 from '../assets/ExampleBot1.jpeg'
import ExampleBot2 from '../assets/ExampleBot2.jpeg'
import ExampleBot3 from '../assets/ExampleBot3.jpeg'


const Content = (props) => {
    const {changeTheme,mode}=props.passProps;

  return (
    <div className={mode==="light1" ?  'pl-4 bg-white h-screen w-full overflow-y-auto':mode==="light2" ? 'pl-4 bg-main-content-light h-screen w-full overflow-y-auto':mode==="light3" ? 'pl-4 bg-main-content-light h-screen w-full overflow-y-auto':'pl-4 bg-main-content h-screen w-full overflow-y-auto'}>
      <div className={mode==="dark" ? 'text-white pt-4 font-bold':'text-black pt-4 font-bold'}>
        Impact Holding Company Bots
      </div>

        <div className='grid lg:grid-cols-[20%_20%_20%_20%] md:grid-cols-3  sm:grid-cols-2 xs:grid-cols-1 gap-2'>
        <div  className={mode==="light1" ?  ' bg-white border  rounded-md overflow-hidden drop-shadow-md h-44': mode==="light2" ?  ' bg-white border rounded-md overflow-hidden drop-shadow-md h-44': mode==="light3" ? ' bg-white border rounded-md overflow-hidden drop-shadow-md h-44':' bg-bot-card-color border border-gold-color rounded-md overflow-hidden drop-shadow-md h-44'}>
        <div className='flex flex-col'>
            <div className='flex justify-center h-20'>
            <div className='bg-slate-500 rounded-full w-16 h-16 m-2 relative'>
                <img src={sagae} className='absolute w-full h-full rounded-full object-cover'/>
            </div>
            </div>
            <div>
            <div className={mode==="dark"? 'text-left pl-2 pr-1 mb-2 mt-1 flex flex-col text-white h-[4.5rem] overflow-hidden':'text-left pl-2 pr-1 mb-2 mt-1 flex flex-col text-black h-[4.5rem] overflow-hidden '}>
                <div className='font-bold'>
                Sagae President
                </div>
                <div>
                Lorem ipsum dolor, asdfdslilementum semper nisi. Aenean vulputate eleifend tellus. 
                </div>
            </div>
            </div>
        </div>

      </div>
      </div>


      <div className={mode==="dark" ? 'text-white pt-4 font-bold':'text-black pt-4 font-bold'}>
        Company Bots
      </div>
      <div className='grid lg:grid-cols-[20%_20%_20%_20%] md:grid-cols-3  sm:grid-cols-2 xs:grid-cols-1 gap-2'>
      <div  className={mode==="light1" ?  ' bg-white border  rounded-md overflow-hidden drop-shadow-md h-44': mode==="light2" ?  ' bg-white border rounded-md overflow-hidden drop-shadow-md h-44': mode==="light3" ? ' bg-white border rounded-md overflow-hidden drop-shadow-md h-44':' bg-bot-card-color border border-gold-color rounded-md overflow-hidden drop-shadow-md h-44'}>
        <div className='flex flex-col'>
            <div className='flex justify-center'>
            <div className='bg-slate-500 rounded-full w-16 h-16 m-2 relative'>
                <img src={SpeechToTextBot} className='absolute w-full h-full rounded-full object-cover'/>
            </div>
            </div>
            <div>
            <div className={mode==="dark"? 'text-left pl-2 pr-1 mb-2 mt-1 flex flex-col text-white h-[4.5rem] overflow-hidden':'text-left pl-2 pr-1 mb-2 mt-1 flex flex-col text-black h-[4.5rem] overflow-hidden '}>
                <div className='font-bold'>
                Speech to Text Bot
                </div>
                <div>
                   This is speech to text bot.
                </div>
            </div>
            </div>
        </div>

      </div>


      <div  className={mode==="light1" ?  ' bg-white border  rounded-md overflow-hidden drop-shadow-md h-44': mode==="light2" ?  ' bg-white border rounded-md overflow-hidden drop-shadow-md h-44': mode==="light3" ? ' bg-white border rounded-md overflow-hidden drop-shadow-md h-44':' bg-bot-card-color border border-gold-color rounded-md overflow-hidden drop-shadow-md h-44'}>
        <div className='flex flex-col'>
            <div  className='flex justify-center'>
            <div className='bg-slate-500 w-full h-20 relative'>
                <img src={CustomerSupport} className='absolute w-full h-full inset-0 object-cover'/>
            </div>
            </div>
            <div>
            <div className={mode==="dark"? 'text-left pl-2 pr-1 mb-2 mt-1 flex flex-col text-white h-[4.5rem] overflow-hidden':'text-left pl-2 pr-1 mb-2 mt-1 flex flex-col text-black h-[4.5rem] overflow-hidden '}>
                <div className='font-bold'>
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
        <div  className={mode==="light1" ?  ' bg-white border  rounded-md overflow-hidden drop-shadow-md h-44': mode==="light2" ?  ' bg-white border rounded-md overflow-hidden drop-shadow-md h-44': mode==="light3" ? ' bg-white border rounded-md overflow-hidden drop-shadow-md h-44':' bg-bot-card-color border border-gold-color rounded-md overflow-hidden drop-shadow-md h-44'}>
        <div className='flex flex-col'>
            <div className='flex justify-center'>
            <div className='bg-slate-500 w-full h-20 relative'>
                <img src={NewProject} className='absolute w-full h-full inset-0 object-cover object-top'/>
            </div>
            </div>
            <div>
            <div className={mode==="dark"? 'text-left pl-2 pr-1 mb-2 mt-1 flex flex-col text-white h-[4.5rem] overflow-hidden':'text-left pl-2 pr-1 mb-2 mt-1 flex flex-col text-black h-[4.5rem] overflow-hidden '}>
                <div className='font-bold'>
                New Project Bot
                </div>
                <div>
                   This is new project bot 
                </div>
            </div>
         </div>
        </div>
        </div>
  

        <div  className={mode==="light1" ?  ' bg-white border  rounded-md overflow-hidden drop-shadow-md h-44': mode==="light2" ?  ' bg-white border rounded-md overflow-hidden drop-shadow-md h-44': mode==="light3" ? ' bg-white border rounded-md overflow-hidden drop-shadow-md h-44':' bg-bot-card-color border border-gold-color rounded-md overflow-hidden drop-shadow-md h-44'}>
        <div className='flex flex-col'>
            <div className='flex justify-center'>
            <div className='bg-slate-500 rounded-full w-16 h-16 m-2 relative'>
                <img src={CustomerSupport1} className='absolute w-full h-full rounded-full object-fill'/>
            </div>
            </div>
            <div>
            <div className={mode==="dark"? 'text-left pl-2 pr-1 mb-2 mt-1 flex flex-col text-white h-[4.5rem] overflow-hidden':'text-left pl-2 pr-1 mb-2 mt-1 flex flex-col text-black h-[4.5rem] overflow-hidden '}>
            <div className='font-bold'>
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


            <div className={mode==="dark" ? 'text-white pt-4 font-bold':'text-black pt-4 font-bold'}>
                    Group Bots
                </div>
                <div className={mode==="dark" ? 'text-white ml-2 mb-4 font-bold':'text-black ml-2 mb-4 font-bold'}>
                Development Group
                </div>
      <div className='grid lg:grid-cols-[20%_20%_20%_20%] md:grid-cols-3  sm:grid-cols-2 xs:grid-cols-1 gap-2'>
      <div  className={mode==="light1" ?  ' bg-white border  rounded-md overflow-hidden drop-shadow-md h-44': mode==="light2" ?  ' bg-white border rounded-md overflow-hidden drop-shadow-md h-44': mode==="light3" ? ' bg-white border rounded-md overflow-hidden drop-shadow-md h-44':' bg-bot-card-color border border-gold-color rounded-md overflow-hidden drop-shadow-md h-44'}>
        <div className='flex flex-col'>
            <div className='flex justify-center'>
            <div className='bg-slate-500 w-full h-20 relative'>
                <img src={ProgrammingBot} className='absolute w-full h-full inset-0 object-cover'/>
            </div>
            </div>
            <div>
            <div className={mode==="dark"? 'text-left pl-2 pr-1 mb-2 mt-1 flex flex-col text-white h-[4.5rem] overflow-hidden':'text-left pl-2 pr-1 mb-2 mt-1 flex flex-col text-black h-[4.5rem] overflow-hidden '}>
                <div className='font-bold'>
                Programming Bot
                </div>
                <div>
                   This is programming bot 
                </div>
            </div>
            </div>
        </div>

      </div>


      <div  className={mode==="light1" ?  ' bg-white border  rounded-md overflow-hidden drop-shadow-md h-44': mode==="light2" ?  ' bg-white border rounded-md overflow-hidden drop-shadow-md h-44': mode==="light3" ? ' bg-white border rounded-md overflow-hidden drop-shadow-md h-44':' bg-bot-card-color border border-gold-color rounded-md overflow-hidden drop-shadow-md h-44'}>
        <div className='flex flex-col'>
            <div className='flex justify-center'>
            <div className='bg-slate-500 rounded-full w-16 h-16 m-2 relative'>
                <img src={NewProject1} className='absolute w-full h-full rounded-full object-cover'/>
            </div>
            </div>
            <div>
            <div className={mode==="dark"? 'text-left pl-2 pr-1 mb-2 mt-1 flex flex-col text-white h-[4.5rem] overflow-hidden':'text-left pl-2 pr-1 mb-2 mt-1 flex flex-col text-black h-[4.5rem] overflow-hidden '}>
                <div className='font-bold'>
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

       <div className={mode==="dark" ? 'text-white pt-4 font-bold':'text-black pt-4 font-bold'}>
        Private Bots
      </div>
      <div className='grid lg:grid-cols-[20%_20%_20%_20%] md:grid-cols-3  sm:grid-cols-2 xs:grid-cols-1 gap-2'>
      <div  className={mode==="light1" ?  ' bg-white border  rounded-md overflow-hidden drop-shadow-md h-44': mode==="light2" ?  ' bg-white border rounded-md overflow-hidden drop-shadow-md h-44': mode==="light3" ? ' bg-white border rounded-md overflow-hidden drop-shadow-md h-44':' bg-bot-card-color border border-gold-color rounded-md overflow-hidden drop-shadow-md h-44'}>
        <div className='flex flex-col'>
            <div className='flex justify-center'>
            <div className='bg-slate-500 rounded-full w-16 h-16 m-2 relative'>
                <img src={ExampleBot} className='absolute w-full h-full rounded-full object-cover'/>
            </div>
            </div>
            <div>
            <div className={mode==="dark"? 'text-left pl-2 pr-1 mb-2 mt-1 flex flex-col text-white h-[4.5rem] overflow-hidden':'text-left pl-2 pr-1 mb-2 mt-1 flex flex-col text-black h-[4.5rem] overflow-hidden '}>
                <div className='font-bold'>
                Example Bot 1
                </div>
                <div>
                   This is Example Bot 1.
                </div>
            </div>
            </div>
        </div>

      </div>


      <div  className={mode==="light1" ?  ' bg-white border  rounded-md overflow-hidden drop-shadow-md h-44': mode==="light2" ?  ' bg-white border rounded-md overflow-hidden drop-shadow-md h-44': mode==="light3" ? ' bg-white border rounded-md overflow-hidden drop-shadow-md h-44':' bg-bot-card-color border border-gold-color rounded-md overflow-hidden drop-shadow-md h-44'}>
        <div className='flex flex-col'>
            <div  className='flex justify-center'>
            <div className='bg-slate-500 w-full h-20 relative'>
                <img src={ExampleBot1} className='absolute w-full h-full inset-0 object-cover'/>
            </div>
            </div>
            <div>
            <div className={mode==="dark"? 'text-left pl-2 pr-1 mb-2 mt-1 flex flex-col text-white h-[4.5rem] overflow-hidden':'text-left pl-2 pr-1 mb-2 mt-1 flex flex-col text-black h-[4.5rem] overflow-hidden '}>
                <div className='font-bold'>
                Example Bot 2
                </div>
                <div>
                   This is Example Bot 2.
                </div>
            </div>
            </div>  
        </div>
        </div>
        
        <div  className={mode==="light1" ?  ' bg-white border  rounded-md overflow-hidden drop-shadow-md h-44': mode==="light2" ?  ' bg-white border rounded-md overflow-hidden drop-shadow-md h-44': mode==="light3" ? ' bg-white border rounded-md overflow-hidden drop-shadow-md h-44':' bg-bot-card-color border border-gold-color rounded-md overflow-hidden drop-shadow-md h-44'}>
        <div className='flex flex-col'>
            <div className='flex justify-center'>
            <div className='bg-slate-500 w-full h-20 relative'>
                <img src={ExampleBot2} className='absolute w-full h-full inset-0 object-cover object-top'/>
            </div>
            </div>
            <div>
            <div className={mode==="dark"? 'text-left pl-2 pr-1 mb-2 mt-1 flex flex-col text-white h-[4.5rem] overflow-hidden':'text-left pl-2 pr-1 mb-2 mt-1 flex flex-col text-black h-[4.5rem] overflow-hidden '}>
                <div className='font-bold'>
                Example Bot 3
                </div>
                <div>
                   This is Example Bot 3. 
                </div>
            </div>
         </div>
        </div>
        </div>
  

        <div  className={mode==="light1" ?  ' bg-white border  rounded-md overflow-hidden drop-shadow-md h-44': mode==="light2" ?  ' bg-white border rounded-md overflow-hidden drop-shadow-md h-44': mode==="light3" ? ' bg-white border rounded-md overflow-hidden drop-shadow-md h-44':' bg-bot-card-color border border-gold-color rounded-md overflow-hidden drop-shadow-md h-44'}>
        <div className='flex flex-col'>
            <div className='flex justify-center'>
            <div className='bg-slate-500 rounded-full w-16 h-16 m-2 relative'>
                <img src={ExampleBot3} className='absolute w-full h-full rounded-full object-fill'/>
            </div>
            </div>
            <div>
            <div className={mode==="dark"? 'text-left pl-2 pr-1 mb-2 mt-1 flex flex-col text-white h-[4.5rem] overflow-hidden':'text-left pl-2 pr-1 mb-2 mt-1 flex flex-col text-black h-[4.5rem] overflow-hidden '}>
            <div className='font-bold'>
                Example Bot 4
                </div>
                <div>
                   This is Example Bot 4.
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
