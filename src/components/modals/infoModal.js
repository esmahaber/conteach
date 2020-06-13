import React from 'react';


function hide(e) {
    document.getElementById("Infomodal").classList.remove('show')
    document.getElementById("Infomodal").style.display = "none";
}

const InfoModal = props => {
    return (
        <div className="modal fade bd-example-modal-sm show " id="Infomodal"
            tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" style={{ display: 'block' }}>
            <div className="modal-dialog modal-sm ">
                <div className="modal-content " >
                    <div className="modal-header">

                        <button className="close" type="button" data-dismiss="modal" aria-label="Close"
                       
                            onClick={hide}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {props.message}
                    </div>

                </div>
            </div>
        </div>


    );
};


export default InfoModal; 