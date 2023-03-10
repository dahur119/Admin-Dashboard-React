import React from 'react'
import { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart} from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import {RiNotificationLine} from 'react-icons/ri';
import {MdKeyboardArrowDown} from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import  avatar  from '../data/avatar.jpg';
import {Cart, Chat, Notification, UserProfile} from '.';
import { useStateContext } from '../context/ContextProvider'


const NavButton = ({ title, customFunc, icon, color, dotColor})=>(
  <TooltipComponent content={title} position="BottomCenter">
    <button type='button' onClick={customFunc} style={{color}} 
    className="relative text-xl rounded-full p-3 hover:bg-light-grey" 
    >
      <span style={{background:dotColor}}
    className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
    
    />
     {icon}
     



    </button>
    


  </TooltipComponent>
)

function NavBar() {
  const  {isActiveMenu, setIsActiveMenu, isClicked, setIsClicked, handleClick, screenSize,
    setScreenSize, currentColor } = useStateContext(); 

    useEffect(()=>{
      const handleResize = () =>setScreenSize(window.innerWidth);

      window.addEventListener('resize', handleResize);

      handleResize();

      return ()=> window.removeEventListener('resize'. handleResize)


    }, [])

    useEffect(()=>{
      if (screenSize <= 900){
        setIsActiveMenu(false)
      }else{
        setIsActiveMenu(true)
      }
    },[screenSize])

 
  return  (
    <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
     <NavButton title="Menu" 
     customFunc={()=>setIsActiveMenu((prevState)=>!prevState)}
      color={currentColor}
      icon={<AiOutlineMenu/>}
     />

     
     <div className='flex justify-between'>

     <NavButton
       title="Cart" 
     customFunc={()=>handleClick('cart')}
      color={currentColor} 
      dotColor="#03C9D7"
      icon={<FiShoppingCart/>}
     />

<NavButton
       title="Chat" 
       customFunc={()=>handleClick('chat')}
      color={currentColor} 
      dotColor="#03C9D7"
      icon={<BsChatLeft/>}
     />

<NavButton
       title="Notification" 
       customFunc={()=>handleClick('notification')}
      color={currentColor}
      dotColor="#03C9D7"
      icon={<RiNotificationLine/>}
     />

     <TooltipComponent content="Profile" position="BottomCenter">
      <div className='flex items-center gap-2 cursor-pointer p-1  hover:bg-light-gray rounded-lg'onClick={()=>setIsActiveMenu(()=>{})}>
        <img
        className='rounded-full w-8 h-8'
        src={avatar}
        />
        <p>
          <span className='text-grey-400 text-14'>Hi, </span> {' '}
          <span className='text-grey-400 font-bold ml-1 text-14'>Adedayo</span>
        </p>
        <MdKeyboardArrowDown
        className='text-grey-400 text-14'
        />

      

        

      </div>

     </TooltipComponent>

     {isClicked.cart && <Cart/>}
     {isClicked.chat && <Chat/> }
     {isClicked.notification && <Notification/>}
     {isClicked.userProfile && <UserProfile/>}
  


     </div>

  
    </div>
  )
}

export default NavBar