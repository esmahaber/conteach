import React, { Component } from 'react';
import config from '../../../config';
import axios from 'axios';
import MessageButton from '../messageButton'

var check = false;
export var unReadCount = 0;
export const messagesModalShow = () => {
  check = !check;
  check ? document.getElementById("messages").classList.add('show') :
    document.getElementById("messages").classList.remove('show');
}

export default class messageModal extends Component {

  state = {
    data: [],
    loading: false,
    selectedRows: [],
    alici_no: parseInt(sessionStorage.getItem("userStudNo")),
  };

  componentWillMount() {
    const getMessage = async page => {
      var data = {
        alici_no: this.state.alici_no
      }

      const response = await axios.post(
        `${config.apiUrl}/api/mesajlar/`, data
      );
      for (var i = 0; i < response.data.length; i++)
        if (response.data[i].okundu === 0) {
         unReadCount++
        }
      this.setState({
        data: response.data,
        loading: false,
      });

    }
    getMessage();
  }


  render() {
    return (
      <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
        id="messages"
        aria-labelledby="messagesDropdown">
        <h6 className="dropdown-header">
          Mesajlar
  </h6>
        {
          this.state.data.map(mesaj =>
            <MessageButton
              key={mesaj.id}
              id={mesaj.id}
              title={mesaj.mesaj}
              sender="Admin"
              date={mesaj.gonderim_tarihi}
              readReceipt={mesaj.okundu}
            />
          )
        }
        <button className="dropdown-item text-center small text-gray-500" href="#">Mesajlar</button>
      </div>

    );
  };
};