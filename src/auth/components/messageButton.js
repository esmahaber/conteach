import React from 'react'

import { Link } from 'react-router-dom';
import config from '../../config';
import axios from 'axios';

function change(id) {
    console.log(id)
}

const MessageButton = ({ id, title, sender, date, readReceipt }) => {

    const changeReadReceipt = async page => {
        var data;

        console.log(page.id)
        /* const response = await axios.post(
             `${config.apiUrl}/api/mesajlar/`, data
         );
         console.log(response.data)
         this.setState({
             data: response.data,
             loading: false,
         });
         */
    }
    const readMessage = (
        <button className="dropdown-item d-flex align-items-center" href="#"

        >
            <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src="https://source.unsplash.com/AU4VPcFN4LE/60x60" alt="" />
                <div className="status-indicator" />
            </div>
            <div>

                <div className="text-truncate">{title}</div>
                <div className="small text-gray-500">{sender} · {date}</div>

            </div>
        </button>
    );
    const unreadMessage = (
        <button className="dropdown-item d-flex align-items-center"
            onClick={changeReadReceipt}
        >
            <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src="https://source.unsplash.com/AU4VPcFN4LE/60x60" alt="" />
                <div className="status-indicator" />
            </div>
            <div>
                <div className="font-weight-bold">
                    <div className="text-truncate">{title}</div>
                    <div className="small text-gray-500">{sender} · {date}</div>
                </div>
            </div>
        </button>
    );
    return (
        <div>
            {readReceipt ? readMessage : unreadMessage}
        </div>
    );





};
export default MessageButton;