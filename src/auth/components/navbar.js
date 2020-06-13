import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserInfoModal, { userModal } from './modals/userInfoModal';
import MessagesModal, { messagesModalShow } from './modals/messageModal';
import { userProfile, userSettings } from '../../actions/loginActions';


const Navbar = (user) => {

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-5 static-top shadow-bottom">
      {/* Sidebar Toggle (Topbar) */}
      <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
        <i className="fa fa-bars" />
      </button>
      {/* Topbar Search */}
      <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input type="text" className="form-control bg-light border-0 small" placeholder="Ara" aria-label="Search" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn btn-primary" >
              <i className="fas fa-search fa-sm" />
            </button>
          </div>
        </div>
      </form>
      {/* Topbar Navbar */}
      <ul className="navbar-nav ml-auto">
        {/* Nav Item - Search Dropdown (Visible Only XS) */}
        <li className="nav-item dropdown no-arrow d-sm-none">
          <button className="nav-link dropdown-toggle" href="#" id="searchDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-search fa-fw" />
          </button>

          {/* Dropdown - Messages */}

        </li>

        {/* Nav Item - Messages */}
        <li className="nav-item dropdown no-arrow mx-1">
          <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" data-target="#ornekModal" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-envelope fa-fw" onClick={messagesModalShow} />
            {/* Counter - Messages */}
            <span className="badge badge-danger badge-counter">7</span>
          </a>

          {/* Dropdown - Messages */}
          <MessagesModal />

        </li>
        <div className="topbar-divider d-none d-sm-block" />
        {/* Nav Item - User Information */}
        <li className="nav-item dropdown no-arrow" >
          <a className="nav-link dropdown-toggle" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
            onClick={userModal}
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">{sessionStorage.getItem("userName")} {sessionStorage.getItem("userLastname")}</span>
            <i className="img-profile rounded-circle far fa-smile fa-w-14 fa-2x"

            />

          </a>
          {/* Dropdown - User Information */}

          <UserInfoModal
            done={user.user.LoginUser.profilButton}
            userProfile={user.userProfile}
            userSettings={user.userSettings}
            onChangeView={user.onChangeView}
          />

        </li>
      </ul>
    </nav>

  );
};

Navbar.propTypes = {
  user: PropTypes.any
}

const mapStateToProps = state => ({
  user: state
});

const mapDispatchToProps = {
  userProfile,
  userSettings

};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);


