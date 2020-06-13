import React, { Component } from 'react';
import axios from 'axios';
import { storiesOf } from '@storybook/react';
import DataTable from 'react-data-table-component';
import config from '../../config';
import memoize from 'memoize-one';
import infoModal from '../../components/modals/infoModal'
import InfoModal from '../../components/modals/infoModal';

const selectProps = { indeterminate: isIndeterminate => isIndeterminate };

const columns = memoize(clickHandler => [
    {
        cell: row => <button className="btn btn-danger btn-circle" row={row} onClick={clickHandler}>
            <i className="fa fa-envelope"></i>
        </button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },
    {
        name: 'İsim',
        selector: 'isim',
        sortable: true,
    },
    {
        name: 'Soyisim',
        selector: 'soyisim',
        sortable: true,
    },
    {
        name: 'Öğrenci Numarası',
        selector: 'ogr_no',
        sortable: true,
    },
]);



export default class AdvancedPaginationTable extends Component {

    state = {
        data: [],
        loading: false,
        totalRows: 0,
        perPage: 10,
        selectedRows: [],
        messagesButton: false,
        gonderen_no: parseInt(sessionStorage.getItem("userStudNo")),
        alici_no: "",
        mesaj: ""
    };

    async componentDidMount() {

        this.setState({ loading: true });

        const response = await axios.get(
            `${config.apiUrl}/kullanicilar/`,
        );
        console.log(response.data)
        this.setState({
            data: response.data,
            totalRows: response.data.total,
            loading: false,
        });
    }

    handleButtonClick = (state) => {
        console.log(state.ogr_no);
        this.setState({
            messagesButton: true,
            selectedRows: state.selectedRows
        });


    }

    handleChange = state => {

        console.log(state)
        console.log('state', state.selectedRows);

        this.setState({ selectedRows: state.selectedRows });
    }

    handleRowClicked = row => {
        console.log(`${row.isim} was clicked!`);
        this.setState({
            alici_no: row.ogr_no

        });
    }

    onChange = (e) => {
        this.setState({
            mesaj: e.target.value
        })
    }

    onSendMessage = async page => {
        var data = {
            gonderen_no: this.state.gonderen_no,
            alici_no: this.state.alici_no,
            mesaj: this.state.mesaj

        }
        console.log(data)
        const response = await axios.post(
            `${config.apiUrl}/api/mesajlar/yeni_mesaj`, data
        );

        console.log(response.data)
        this.setState({
            data: response.data,
            totalRows: response.data.total,
            loading: false,
        });

    }

    render() {
        const { loading, data, totalRows } = this.state;

        const messageComp = (
            <div className="smallCard card shadow">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Mesaj</h6>
                </div>
                <div className="card-body" style={{ textAlign: "center" }}>
                    <textarea className="admin_note" id="messageBox" onChange={this.onChange}
                    />
                    <div>
                        <button

                            onClick={this.onSendMessage}
                            className="btn btn-success" style={{ float: "right", margin: "10px" }}

                        >Gönder</button>
                    </div>

                </div>
                {
                    this.state.data.status ? <InfoModal message={"Mesaj başarılı bir şekilde gönderildi."} /> : null
                }
            </div>

        );

        return (
            this.state.messagesButton ? messageComp :
                <DataTable
                    title="Öğrenci Listesi"
                    columns={columns(this.handleButtonClick)}
                    data={data}
                    progressPending={loading}
                    pagination
                    paginationServer
                    highlightOnHover
                    onRowClicked={this.handleRowClicked}



                />
        );
    }
}

storiesOf('Pagination', module)
    .add('Server-Side', () => <AdvancedPaginationTable />);