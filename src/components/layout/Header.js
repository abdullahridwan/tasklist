import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa'

export const Header = () => {
    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <FaPizzaSlice />
                    Insert pic of logo Here 
                </div>
                <div className="settings">
                    <ul>
                        <li> + </li>
                        <li> Settings </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}