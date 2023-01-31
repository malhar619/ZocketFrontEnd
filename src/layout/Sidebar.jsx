import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';
import Logo from '../assets/zocketLogo.png';
import { BiHomeAlt } from 'react-icons/bi';
import { HiSpeakerphone } from 'react-icons/hi';
import { BsPeople, BsBasket2 } from 'react-icons/bs';

const Sidebar = () => {
    return (
        <div className="sidebar--container">
            <div className="sidebar--logo-container">
                <img src={Logo} alt="Zocket Logo" />
            </div>
            <div className="sidebar--menu">
                <div className="sidebar--menu-items">
                    <NavLink
                        className={({ isActive }) => (isActive ? 'tab-is-active' : 'tab-is-not-active')}
                        to="/"
                        end
                    >
                        <BiHomeAlt
                            size={20}
                            style={{ margin: "0.3em auto 0" }}
                        />
                        <p>Home</p>
                    </NavLink>
                </div>
                <div className="sidebar--menu-items">
                    <NavLink
                        className={({ isActive }) => (isActive ? 'tab-is-active' : 'tab-is-not-active')}
                        to="/campaign"
                    >
                        <HiSpeakerphone
                            size={20}
                            style={{ margin: "0.2em auto" }}
                        />
                        <p>Campaign</p>
                    </NavLink>
                </div>
                <div className="sidebar--menu-items">
                    <NavLink
                        className={({ isActive }) => (isActive ? 'tab-is-active' : 'tab-is-not-active')}
                        to="/products"
                    >
                        <BsBasket2
                            size={20}
                            style={{ margin: "0.3em auto" }}
                        />
                        <p>Products</p>
                    </NavLink>
                </div>
                <div className="sidebar--menu-items">
                    <NavLink
                        className={({ isActive }) => (isActive ? 'tab-is-active' : 'tab-is-not-active')}
                        to="/customers"
                    >
                        <BsPeople
                            size={20}
                            style={{ margin: "0.3em auto" }}
                        />
                        <p>Customers</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;