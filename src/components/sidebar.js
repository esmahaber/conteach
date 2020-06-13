import React from 'react';

function Sidebar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/home">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">
                    
                    LOGO</div>
            </a>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item">
                <a className="nav-link" href="/home">
                    <i className="far fa-calendar-alt" />
                    <span>Görüşme Oluştur</span></a>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />          

        </ul>
    );
};


export default Sidebar;