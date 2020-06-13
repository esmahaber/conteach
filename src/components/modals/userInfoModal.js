import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogoutModal from './logoutModal';

let check = false;

export function userModal(e) {
    check = !check;

    check ? document.getElementById("userInfo").classList.add('show') :
        document.getElementById("userInfo").classList.remove('show');
}

function logoutModalShow(e) {

    if (check) {
        document.getElementById("logoutModal").classList.add('show');
        document.getElementById("logoutModal").style.display = "block";
    } else
        document.getElementById("logoutModal").classList.remove('show');
}




class UserInfo extends Component {



    onClicked = (e) => {
        e.preventDefault();
        if (e.target.name === "profile")
            this.props.userProfile();
        if (e.target.name === "settings")
            this.props.userSettings();
        console.log(this.props)
        userModal();


    }


    render() {
        const onChangeView = this.props.onChangeView;

        return (
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in " aria-labelledby="userDropdown"
                id="userInfo"
            >
                <Link exact='true' to='/home/profile'> <button className="dropdown-item"
                    name="profile"
                    onClick={e => {
                        e.preventDefault();
                        onChangeView(2);
                        userModal();
                    }
                    }
                >
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
      Profil
    </button> </Link>

                <Link exact='true' to='/home/settings'>

                    <button className="dropdown-item"
                        name="settings"
                        onClick={e => {
                            e.preventDefault();
                            onChangeView(3);
                            userModal();
                        }
                        } >
                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
      Ayarlar
    </button>
                </Link>
                <button className="dropdown-item" >
                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
      Activity Log
    </button>
                <div className="dropdown-divider" />
                <button className="dropdown-item" data-toggle="modal" data-target="#logoutModal"
                    onClick={logoutModalShow}
                >
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
      Çıkış
    </button>

                <LogoutModal />


            </div>
        );
    }
};

export default (UserInfo);