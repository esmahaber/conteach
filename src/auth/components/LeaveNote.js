import React from 'react';
import Sidebar from './sidebar'
import Navbar from './navbar'
import NotePage from './pages/notePage'
import Screen from './Screen'
import { connect } from 'react-redux';
import { leaveNoteScreen, fetchNote } from '../../actions/noteAction';


class leaveNote extends React.Component {

  state = {
    notlar: "Hoşgeldiniz",
    k_id: sessionStorage.getItem("k_id")
  }

  onChange = (e) => {
    this.setState({
      notlar: e.target.value

    })
  }

  onClick = () => {
    // this.props.authCheck(this.state.k_id);
    this.props.leaveNoteScreen(this.state);
    // this.props.fetchNote(this.state.k_id);
  }

  render() {
    // console.log(document.getElementById("noteMarq"))
    return (

      <div className="Card card ">
        <div className="card-body" >


          <div className="smallCard card ">
            <div className="">
              <h6 className="m-2 ">Ekran</h6>
            </div>
            <div className="card-body" style={{ textAlign: "center" }}>
              <Screen
                myNote={this.state.notlar}
              />
            </div>
          </div>

          <div className="smallCard card shadow">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Ekran Notu Bırak</h6>
            </div>
            <div className="card-body" style={{ textAlign: "center" }}>
              <textarea name="admin_note" id="adminNote" onChange={this.onChange}
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
        </div>
      </div>

    );
  };
}

const mapDispatchToProps = {
  leaveNoteScreen,
  fetchNote
};

export default connect(null, mapDispatchToProps)(leaveNote);

