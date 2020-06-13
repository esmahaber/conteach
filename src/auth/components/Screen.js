import React, { Component } from 'react';
import { connect } from 'react-redux';
import { leaveNoteScreen, fetchNote } from '../../actions/noteAction';


class Screen extends Component {


    constructor() {
        super()
        this.state = {
            myNote: "",
            notlar: ""
        }

    }


    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(prevState)
        console.log(nextProps)
        // document.cookie = "myNote=" + this.state.myNote
        if (nextProps.myNote !== prevState.notlar)
            // return ({ notlar: nextProps.myNote }) // <- this is setState equivalent

            return null
    }

    /*
        shouldComponentUpdate(){
            return this.props.fetchNote().then(e =>{
                console.log(e.payload[0]);
                this.setState({
    
                })
            }
                
                )
        }
    */
    componentDidMount() {
        this.fetch();
    }

    fetch = (params) => {
        return this.props.fetchNote().then(e => {
            console.log(e);
            this.setState({
                notlar: e.payload[0].notlar
            })
        }
        )
    }

    render() {
        console.log(this.state)

        return (
            <div className="card  mb-4"
                style={{ maxWidth: "100%", maxHeight: "100%", textAlign:"center" }}
            >
                <div className="card-body">
                    <div className="mainDiv kayanyazi " style={{
                        display: "table"
                    }}>
                        <marquee id="noteMarq" className="childDiv "
                            scrolldelay="0"
                            height="100%"
                        >
                            {this.state.notlar}
                        </marquee>

                    </div>
                </div>

            </div>

        );
    };
};



const mapDispatchToProps = {
    leaveNoteScreen,
    fetchNote
};

export default connect(null, mapDispatchToProps)(Screen);