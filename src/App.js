import React from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { FiSettings } from 'react-icons/fi';
import { BrowserRouter } from "react-router-dom";
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import {ThemeSettings,NavBar, SideBar, Footer } from './components';
import {Ecommerce,Order, Calender, Stacked, Pyramid, Customer, Area, Pie, Financial, Kanban, ColorPicker, Line, ColorMapping, Editor, Employess
 } from './pages'
 import { useStateContext } from './context/ContextProvider';

import './App.css';

function App() {
  const {isActiveMenu} = useStateContext();

 
  return (
    <BrowserRouter>
     <div className="flex relative dark:bg-main-dark-bg">
      <div className="fixed right-4 bottom-4 " style={{zIndex: '1000'}}>
        <TooltipComponent content="Settings" position="Top">
          <button type="button" 
          className="text-3xl 
          p-3 hover:drop-shadow-xl 
           hover:bg-light-gray text-white"
           style={{background:"blue", borderRadius:'50%'}}
           
           >
            <FiSettings/>
          </button>
          
        </TooltipComponent>
      </div>
      {
        isActiveMenu ? (
          <div className="w-72
           fixed dark:bg-secondary-dark-bg bg-white"> 
            <SideBar/>
          </div>
        ): (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <SideBar/>
          </div>
        )}



      <div className={
        isActiveMenu
       ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
       : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 ' 
      }>
        <div className="fixed md:static bg-main-bg
         dark:bg-main-dark-bg navbar w-full">
            <NavBar/>
        </div>
      </div>
      <Routes>
        {/* dashboard */}
  
  <Route path="/ecommerce" element={<Ecommerce/>}/>
  <Route path="/sidebar" element={<SideBar/>}/>

        {/* pages */}

  <Route path="/order" element={<Order/>}/>
  <Route path="/employees" element={<Employess/>}/>
  <Route path="/customers" element={<Customer/>}/>

   
  <Route path="/kanban" elemen={<Kanban/>}/>
  <Route path="/editor" element={<Editor/>}/>
  <Route path="/calender" element={<Calender/>}/>
  <Route path="/color-picker" element={<ColorPicker/>}/>

        {/* chart */}
  <Route path="/line" element={<Line/>}/>
  <Route path="/area" element={<Area/>}/>
  <Route path="/pie" element={<Pie/>}/>
  <Route path="/financial" element={<Financial/>}/>
  <Route p ath="/color-mapping" element={<ColorMapping/>}/>
  <Route path="/stacked" element={<Stacked/>}/>
  <Route path="/pyramid" element={<Pyramid/>}/>
            

        

        


      </Routes>
      
      
    </div>

    </BrowserRouter>
   
  );
}

export default App;
