import React from 'react'
import config from '../../config';
import axios from 'axios';
import InfoModal from './modals/infoModal';
var showMessage = 0;

const MessageButton = ({ id, title, sender, date, readReceipt }) => {

    const changeReadReceipt = async page => {
        var data = { id: page.target.id }
        console.log(page.target.value);

        const response = await axios.put(
            `${config.apiUrl}/api/mesajlar/okundu`, data
        );
        console.log(response.data);
        showMessage = 0;
    }

    const readMessage = (
        <button className="dropdown-item d-flex align-items-center" href="#" onClick={e => showMessage = 0}

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
        <div>
            <button className="dropdown-item d-flex align-items-center" id={id}
                onClick={changeReadReceipt}
            >
                <div className="dropdown-list-image mr-3" id={id}>
                    <img className="rounded-circle" src="https://source.unsplash.com/AU4VPcFN4LE/60x60" id={id} />
                    <div className="status-indicator" id={id} />
                </div>
                <div id={id}>
                    <div className="font-weight-bold" id={id}>
                        <div className="text-truncate" id={id} >{title}</div>
                        <div className="small text-gray-500" id={id}>{sender} · {date}</div>
                    </div>
                </div>
            </button>
        </div>
    );
    return (
        <div>
            {readReceipt ? readMessage : unreadMessage}
            {showMessage ? <InfoModal message={title} /> : null}
        </div>

    );





};
export default MessageButton;