import React, { Component } from 'react';
import events from './events';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/tr';
import _ from 'lodash'

const localizer = momentLocalizer(moment);
moment.locale('tr');
const propTypes = {}

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
  showMore: total => `+ ${total} événement(s) supplémentaire(s)`
}


class BigCalendar extends Component {
  constructor(...args) {
    super(...args)

    this.state = {
      events: _.cloneDeep(events),
      dayLayoutAlgorithm: 'no-overlap',
    }
  }

  handleSelect = ({ start, end }) => {
    console.log("çalıştı")
    const title = window.prompt('New Event name')
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


  render() {
    console.log(new Date())
    return (

      <div>
        <div className="calendar" >
          <Calendar
            selectable
            events={events}
            defaultDate={moment().toDate()}
            localizer={localizer}
            messages={messages}
            scrollToTime={new Date(2020, 1, 1, 6)}
            onSelectEvent={event => alert(event.title)}
            onSelectSlot={console.log("esma")}
            min={moment('09:00', 'h:mma').toDate()}
            max={moment('16:59', 'h:mma').toDate()}
            dayLayoutAlgorithm={this.state.dayLayoutAlgorithm}


          />
        </div>
      </div>
    );
  }


}
BigCalendar.propTypes = propTypes

export default BigCalendar;
