import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./layout.css";

const Layout = ({ children }) => {
    return (
        <div className="layout--container">
            <Sidebar />
            <div className="layout--navbar-children">
                <Navbar />
                <div className="children">{children}</div>
            </div>
        </div>
    );
};

export default Layout;