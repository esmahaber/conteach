import React from 'react';
import Sidebar from './sidebar'
import Navbar from './navbar'
import NotePage from './pages/notePage'
import Screen from './Screen'
import { connect } from 'react-redux';
import { leaveNoteScreen, fetchNote } from '../../actions/noteAction';


class messages extends React.Component {

    state = {

    }



    render() {
        return (
            <div className="smallCard card shadow">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Ekran Notu Bırak</h6>
                </div>
                <div className="card-body" style={{ textAlign: "center" }}>
                    <textarea name="admin_note" id="adminNote" onChange={this.onchange}
                        placeholder="Notunuzu buraya yazabilirsiniz..."
                    />
                    <div>
                        <button

                            onClick={this.onClick}
                            className="btn btn-success" style={{ float: "right", margin: "10px" }}

                        >Gönder</button>
                    </div>

                </div>
            </div>



        );
    };
}


export default connect(null, mapDispatchToProps)(leaveNote);

