import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/tr';
import CalendarButton from './calendarButton'

import InfoModal from './modals/infoModal'
import DeleteModal from './modals/deleteModal'
import { fetchAppointment, deleteAppointment } from '../../actions/appointmentActions';
import { connect } from 'react-redux';


const localizer = momentLocalizer(moment);

const messages = {
  previous: 'Önceki',
  next: 'Sonraki',
  today: 'Bugün',
  month: 'Ay',
  week: 'Hafta',
  day: 'Gün',
  agenda: 'Ajanda',
  date: 'Tarih',
  time: 'Zaman',
  event: 'Görüşme', // Or anything you want
  showMore: total => `+ ${total} Daha fazla(s) supplémentaire(s)`
}

let today = new Date();

class calendarr extends React.Component {

  constructor(...args) {
    super(...args)

    this.state = {
      events: [

      ],

      k_id: sessionStorage.getItem("k_id"),
      kullanici_notu: "",
      randevu_baslangic: "",
      randevu_bitis: "",
      randevu_id: "",
      randevuSil: false,
      appDelete: "",
      title: sessionStorage.getItem("userName") + " " + sessionStorage.getItem("userLastname"),
      allDay: false
    }

  }

  UNSAFE_componentWillMount = () => {
    return this.props.fetchAppointment()
      .then(e => {
        this.returnAppointment()
      })
      .then(e => {

      })
  }

  returnAppointment = () => {

    if (!!this.props.appointment.appointment) {

      for (let i = 0; i < this.props.appointment.appointment.length; i++) {
        let { randevu_baslangic, randevu_bitis, randevu_sahibi, k_id, randevu_id, kullanici_notu, allDay } = this.props.appointment.appointment[i];
        if (!!allDay) {

           if (!!document.getElementsByClassName("rbc-day-slot")) {
            for (var j = 0; j < document.getElementsByClassName("rbc-day-slot").length; j++){
              
             document.getElementsByClassName("rbc-day-slot")[i].id += "allDayEvent"
            }
            }
           

        }

        this.setState({
          events: [
            ...this.state.events,
            {
              start: new Date(randevu_baslangic),
              end: new Date(randevu_bitis),
              title: randevu_sahibi + " " + kullanici_notu,
              randevu_id: randevu_id,
              k_id: k_id,
              allDay: allDay

            }

          ]
        })
      }

    }
  }

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: [e.target.value]
    })
  }

  handleSelect = (e) => {
    console.log(document.getElementsByClassName("rbc-timeslot-group")[0].id += "allDayEvent");
    let { start, end } = e
    let { title } = this.state
    this.setState({
      randevu_baslangic: moment(start).format('YYYY-MM-DD HH:mm:ss'),
      randevu_bitis: moment(end).format('YYYY-MM-DD HH:mm:ss'),
    })
    if (start < today) {
      return (
        alert("Lütfen geçerli bir zaman seçiniz")
      )
    }
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      })

  }

  allDay = () => {
    console.log("allDay")

    var checkBox = document.getElementById("allDayCheck");

    // If the checkbox is checked, display the output text
    if (checkBox.checked === true) {
      this.setState({
        allDay: true
      })
      for (var i = 0; i < document.getElementsByClassName("rbc-day-slot").length; i++)
        document.getElementsByClassName("rbc-day-slot")[i].classList.add("allDayEvent")
    } else {
      for (var i = 0; i < document.getElementsByClassName("rbc-day-slot").length; i++)
      document.getElementsByClassName("rbc-day-slot")[i].classList.remove("allDayEvent")
      this.setState({
        allDay: false
      })

    }
  }



  onSelectEvent = (e) => {

    let { k_id } = e;
    if (!!e.randevu_id)
      if (!!this.props.appointment.appointment) {
        if (k_id == this.state.k_id)
          this.setState({
            randevuSil: true,
            appDelete: e.randevu_id
          })
        this.setState({
          randevuSil: !this.state.randevuSil,
        })
      }


  }

  render() {
    return (
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Görüştürme Oluştur</h6>
        </div>
        <div className="card-body">

          <div className="calendar" style={{ width: "750px", height: "450px" }} >
            <Calendar
              selectable
              events={this.state.events}
              defaultDate={moment().toDate()}
              localizer={localizer}
              messages={messages}
              scrollToTime={new Date(2020, 1, 1, 6)}
              onSelectEvent={this.onSelectEvent}
              onSelectSlot={this.handleSelect}
              min={moment('09:00', 'h:mma').toDate()}
              max={moment('16:59', 'h:mma').toDate()}


            />
            <div >

              <CalendarButton
                randevu_baslangic={this.state.randevu_baslangic}
                randevu_bitis={this.state.randevu_bitis}
                kullanici_notu={this.state.kullanici_notu}
                k_id={this.state.k_id}
                randevu_sahibi={this.state.title}
                allDay={this.state.allDay}
              />

              <div className="switchButton" >
                <p style={{ margin: "auto" }} >
                  Tüm Gün Etkinlik Oluştur:
              </p>
                <label className="switch">

                  <input type="checkbox" id="allDayCheck" onClick={this.allDay} />
                  <span className="slider round"> </span>
                </label>
              </div>


            </div>




            {
              this.props.appointment.done ?
                <InfoModal message={"Görüşme saatiniz başarılı bir şekilde kaydedildi."} />
                : null

            }
            {
              this.state.randevuSil ? <DeleteModal
                deleteAppointment={this.props.deleteAppointment}
                message={"Seçmiş olduğunuz görüşmeyi silmek istediğinize emin misiniz ?"}
                appDelete={this.state.appDelete} />
                : null
            }
          </div>
        </div>
      </div>

    )
  }
}

const mapDispatchToProps = {
  fetchAppointment,
  deleteAppointment
};
const mapStateToProps = ({ Appointment }) => ({
  appointment: Appointment
});
export default connect(mapStateToProps, mapDispatchToProps)(calendarr);
