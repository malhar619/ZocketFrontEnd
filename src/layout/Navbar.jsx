import React from 'react';
import './navbar.css';
import Cake from '../assets/cake.png'
import { RiVipCrownFill, RiTranslate } from 'react-icons/ri';
import { TbGift } from 'react-icons/tb';
import { BsBell } from 'react-icons/bs';

const Navbar = () => {
    return (
        <div className="navbar--container">
            <p>Free trial ends in 2 days</p>
            <div className='navbar--buy-plan'>
                <RiVipCrownFill />
                <p>Buy Plan</p>
            </div>
            <div className='navbar--notification-icons'>
                <TbGift />
                <BsBell />
            </div>
            <div className='navbar--customer-profile'>
                <img src={Cake} alt="cake" />
                <select>
                    <option value="1">Mukund cake shop</option>
                </select>
            </div>
            <div>
                <RiTranslate />
            </div>
        </div>
    );
};

export default Navbar;