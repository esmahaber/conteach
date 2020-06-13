import React, { Component } from 'react';
import Sidebar from '../sidebar'
import Navbar from '../navbar'
import Profile from '../profile'
import Calendar from '../calendar'
import StudentList from '../studentList'
import LeaveNot from '../LeaveNote'

//import AdminNote from '../LeaveNote'

import { connect } from 'react-redux';

//import {calis} from '../JohnnyFive'


class HomePage extends Component {

  constructor() {
    super();
    //1 : Calendar
    //2: StudList
    //3 NotLeave

    this.state = {
      componentView: 1
    }
  }


  UNSAFE_componentWillMount = () => {
    let user = this.props
    if (user.user.LoginUser.user) {
      var k_id = user.user.LoginUser.user.results[0].k_id;
      var userName = (user.user.LoginUser.user.results[0].isim).toUpperCase();
      var userLastname = (user.user.LoginUser.user.results[0].soyisim).toUpperCase();
      var userEposta = user.user.LoginUser.user.results[0].eposta;
      var userBirthDay = user.user.LoginUser.user.results[0].dogum_tarihi;
      var userStudNo = user.user.LoginUser.user.results[0].ogr_no;



      // Store
      sessionStorage.setItem("k_id", k_id);
      sessionStorage.setItem("userName", userName);
      sessionStorage.setItem("userLastname", userLastname);
      sessionStorage.setItem("userEposta", userEposta);
      sessionStorage.setItem("userBirthDay", userBirthDay);
      sessionStorage.setItem("userStudNo", userStudNo);

      // Retrieve


    }

  }

  changeView(newView) {
    this.setState({
      componentView: newView
    })
  }

  render() {
    console.log(this.state)
    return (
      <div id="wrapper">

        <Sidebar onChangeView={this.changeView.bind(this)}  />
        <div id="content-wrapper" className="content-wrapper">
          <div id="content">
            <Navbar />
            <div id="container-fluid" >
              {
                this.state.componentView === 1 ?
                  <Calendar />
                  :
                  2 ? <StudentList />
                    :
                    <LeaveNot/>

              }

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state,
});

export default connect(mapStateToProps, null)(HomePage);