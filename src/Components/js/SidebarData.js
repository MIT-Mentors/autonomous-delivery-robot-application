/* 
	File name		: SidebarData.js
	Purpose			: Contains all the page links that present in the application.
	Developed by	: Aarthi Meena T, Sowbhagya Lakshmi H T, Yogeshwari V S
	Last updated on	: 20-05-2023
	Last updated by	: Yogeshwari V S
*/

import React from 'react';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [

    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'Nav-bar-item',
    },
    {   
        title: 'Instructions',
        path: '/instr',
        icon: <AiIcons.AiFillCarryOut />,
        cName: 'Nav-bar-item'
    },
    {
        title: 'Delivery',
        path: '/login',
        icon: <AiIcons.AiOutlineEnvironment />,
        cName: 'Nav-bar-item'
    },
    {
        title: 'Feedback',
        path: '/fb',
        icon: <AiIcons.AiOutlineComment />,
        cName: 'Nav-bar-item'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <AiIcons.AiFillPhone />,
        cName: 'Nav-bar-item'
    },
    {
        title: 'About',
        path: '/about',
        icon: <AiIcons.AiFillEdit />,
        cName: 'Nav-bar-item'
    },
    {
        title: 'Simulation',
        path: '/simul',
        icon: <AiIcons.AiFillRobot />,
        cName: 'Nav-bar-item'
    },
    
    
]
