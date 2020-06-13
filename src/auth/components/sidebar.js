import React from 'react';
import { Link } from 'react-router-dom';


function Sidebar(props) {
    console.log(props)
    const onChangeView = props.onChangeView;

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
                <button className="nav-link" onClick={e => {
                    e.preventDefault();
                    onChangeView(1);
                }} >
                    <i className="far fa-calendar-alt" />
                    <span>Görüşmeleri Listesi</span></button>
            </li>
            <hr className="sidebar-divider my-0" />
            <li className="nav-item">
                <button className="nav-link" onClick={e => {
                    e.preventDefault();
                    onChangeView(2);
                }
                }>
                    <i className="far fa-calendar-alt" />
                    <span>Öğrenci Listesi</span></button>
            </li>
            <hr className="sidebar-divider my-0" />
            <li className="nav-item">
                <a className="nav-link" href="/auth/home/note">
                    <i className="far fa-calendar-alt" />
                    <span>Not Bırak</span></a>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />

        </ul>
    );
};


export default Sidebar;