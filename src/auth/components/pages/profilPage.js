import React, { Component } from 'react';
import Sidebar from '../sidebar'
import Navbar from '../navbar'
import Profile from '../profile'
import ProfileUpdate from '../profileUpdate'

import { connect } from 'react-redux';

//import {calis} from '../JohnnyFive'


class HomePage extends Component {

    constructor() {
        super();
        //1 : Profil
        //2: Settings

        this.state = {
            componentView: 1
        }
    }

    changeView(newView) {
        this.setState({
            componentView: newView
        })
    }

    render() {
        return (
            <div id="wrapper">

                <Sidebar />
                <div id="content-wrapper" className="content-wrapper">
                    <div id="content">
                        <Navbar onChangeView={this.changeView.bind(this)} />
                        <div id="container-fluid" >
                            {
                                this.state.componentView !== 1 ?
                                    <Profile onView={this.state.componentView}
                                        onChangeView={this.changeView.bind(this)}
                                    />
                                    : 2 ?
                                    <ProfileUpdate />
                                    : null
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