import React, { Component } from 'react'
import { addAppointment } from '../actions/appointmentActions';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/tr';
import { connect } from 'react-redux';



class NoteButton extends Component {


  render() {
    console.log(this.props)
    return (
      <div>
        <button className="btn btn-secondary btn-icon-split" style={{ float: 'right', marginBottom: '50px' }}
          onClick={e => console.log(this.props.addAppointment(this.props))
          }>Tamamla</button>
      </div>
    )

  }
}

const mapDispatchToProps = {
  addAppointment
};

export default connect(null, mapDispatchToProps)(NoteButton);
