import React, { Component } from 'react'
import { addAppointment } from '../../actions/appointmentActions';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/tr';
import { connect } from 'react-redux';



 function NoteButton  (props) {
   console.log(props)
    return (
      <div>        
        <button className="btn btn-secondary btn-icon-split" style={{ float: 'right', marginTop: '25px' }}
          onClick={e => console.log(props.addAppointment(props))
          }>Tamamla</button>
      </div>
    )

}

const mapDispatchToProps = {
  addAppointment
};

export default connect(null, mapDispatchToProps)(NoteButton);
