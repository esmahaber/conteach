import React from 'react';

const DeleteModal = props => {
    const onDeleteAppointment = () => {
        props.deleteAppointment(props.appDelete);
        document.getElementById("Infomodal").classList.remove('show')
        document.getElementById("Infomodal").style.display = "none";
    }
    
    return (
        <div className="modal fade bd-example-modal-sm show " id="Infomodal"
            tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" style={{ display: 'block' }}>
            <div className="modal-dialog modal-sm ">
                <div className="modal-content " >
                    <div className="modal-header">

                        <button className="close" type="button" data-dismiss="modal" aria-label="Close"
                            onClick={ e => {
                            document.getElementById("Infomodal").classList.remove('show')
                            document.getElementById("Infomodal").style.display = "none"}}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {props.message}
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-danger" onClick={onDeleteAppointment} >
                            Sil</button>
                    </div>

                </div>
            </div>
        </div>


    );
};



export default DeleteModal; 