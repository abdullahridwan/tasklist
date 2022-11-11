import React from 'react';
import { 
    FaCalendar,
    FaChevronDown,
    FaInbox,
    FaRegCalendarAlt, 
 } from 'react-icons/fa';

export const SideBar = () => (
        <div className='sidebar' data-testid="sidebar">
            <ul className='sidebar_generic'>
                <li>
                    <span> <FaInbox /> </span>
                    <spn> Inbox </spn>
                </li>
                <li>
                    <span> <FaCalendar /> </span>
                    <spn> Today </spn>
                </li>
                <li>
                    <span> <FaRegCalendarAlt /> </span>
                    <spn> Next 7 days </spn>
                </li>
            </ul>

            <div className='sidebar_middle'>
                <span> <FaChevronDown /> </span>
                <h2> Projects </h2>
            </div>
        </div>
)