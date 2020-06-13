import React, { Component } from 'react'
import { addAppointment } from '../../actions/appointmentActions';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/tr';
import { connect } from 'react-redux';



class AllDayButton extends Component {

    render() {
        console.log(this.props)
        return (
            <div>

                <button id="allDay-btn" className="btn btn-danger" style={{ float: 'right', margin: '25px' }}
                    onClick={this.allDay}
                >
                    Tüm Gün Etkinlik Oluştur
            </button>
            </div>
        )

    }
}

const mapDispatchToProps = {
    addAppointment
};

export default connect(null, mapDispatchToProps)(AllDayButton);
