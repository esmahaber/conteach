import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config';


export default class Messages extends Component {

    state = {
        data: [],
        loading: false,
        selectedRows: [],
        alici_no: 1621012055
    };

    async componentDidMount() {
        this.setState({ loading: true });

        const response = await axios.get(
            `${config.apiUrl}/api/mesajlar`, this.state.alici_no
        );
        console.log(response.data)
        this.setState({
            data: response.data,
            totalRows: response.data.total,
            loading: false,
        });
    }
   
       
    
    render() {

        return (
            <div>
                {this.state.data}
            </div>

            
        );
    }
}
