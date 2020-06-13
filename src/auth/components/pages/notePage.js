import React, { Component } from 'react';
import Screen from '../Screen'
import { connect } from 'react-redux';
import { fetchNote } from '../../../actions/noteAction';
import axios from 'axios';
import config from '../../../config';

class NotePage extends Component {
    constructor() {
        super();
        this.state = {
            myNote: ""
        }
        console.log(this.props)
    }


    static getDerivedStateFromProps(nextProps, prevState) {

        if (nextProps.Note.myNote !== prevState.myNote)
            nextProps.fetchNote()
                .then(e => {
                    return this.setState({
                        myNote: e.data[0].notlar
                    })
                })
                .then(e => {

                })
        return null

        //nextProps.fetchNote(669);
        // document.cookie = "myNote=" + this.state.myNote
        /* axios.get(`${config.apiUrl}/kullanicilar/not/` + 669)
              .then(res => {
                  console.log(res.data[0].notlar);
                  return this.setState({
                      myNote: res.data[0].notlar
                  })
  
              }).then(e => {
                  console.log("2.then")
  
              })
              .catch(error => {
  
              })
              return null
              */
        // return ({ myNote: nextProps.myNote }) // <- this is setState equivalent 
        /*  return this.props.fetchNote(669)
              .then(e => {
                  console.log("esma")
              })
              .then(e => {
  
              })
              */
    }

    fetchNoteFunc = () => {
        axios.get(`${config.apiUrl}/kullanicilar/not/` + 669)
            .then(res => {
                console.log(res.data[0].notlar);
                this.setState({
                    myNote: res.data[0].notlar
                })

            }).then(e => {
                console.log("2.then")

            })
            .catch(error => {

            })
        return "esma"
    }




    render() {
        console.log(this.state)
        console.log(this.props)
        return (
            <div className="card  mb-4"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
            >
                <div className="card-body">
                    <div className="mainDiv kayanyazi " style={{
                        display: "table"
                    }}>
                        <marquee id="noteMarq" className="childDiv "
                            scrolldelay="0"
                            height="100%"
                        >
                            {this.state.myNote}
                        </marquee>

                    </div>
                </div>

            </div>

        );

    }
}

const mapStateToProps = ({ Note }) => ({
    Note: Note,
});
const mapDispatchToProps = {
    fetchNote
};

export default connect(mapStateToProps, mapDispatchToProps)(NotePage);
