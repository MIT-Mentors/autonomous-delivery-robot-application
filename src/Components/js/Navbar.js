/* 
	File name		: Navbar.js
	Purpose			: Corresponds to the navigation bar of the application.
	Developed by	: Aarthi Meena T, Sowbhagya Lakshmi H T, Yogeshwari V S
	Last updated on	: 20-05-2023
	Last updated by	: Yogeshwari V S
*/


import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SidebarData} from './SidebarData';
import '../css/Navbar.css';
import {IconContext} from 'react-icons';


function Navbar() {
  
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
		
    return (

    <>
     <IconContext.Provider value={{color: '#000'}}>  
        
        {/* Navigation bar */}
        <div className = "Navig-bar">
            <Link to='#' className="Bars-icon_menu">
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
        </div>
        <nav className= {sidebar ? 'Navig-bar-menu active' : 'Navig-bar-menu'}>
            <ul className="Navig-bar-items" onClick={showSidebar}>
                <li className = "Navig-bar-item-name">
                    <Link to='#'className='Bars-icon_close'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {SidebarData.map((item,index) =>{
                    return (
                        <li key={index} className={item.cName} >
                            <Link to={{pathname: item.path}}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                        )
                    }
                    )}
            </ul>
        </nav>

        </IconContext.Provider>
    </>
    
    );
}

export default Navbar;
