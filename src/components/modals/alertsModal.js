import React from 'react';

var check = false;
export const alertsModalShow = () => {
    check = !check;
    console.log(check)
    check ? document.getElementById("alerts").classList.add('show') :
        document.getElementById("alerts").classList.remove('show');
}
export default function alertsModal() {
//const date = Date("25 Mar 2001");
    return (
            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="alertsDropdown"
                aria-expanded="false"
                id="alerts"
            >
                <h6 className="dropdown-header">
                    Bildirimler
        </h6>
                <a className="dropdown-item d-flex align-items-center" href="/home">
                    <div className="mr-3">
                        <div className="icon-circle bg-primary">
                            <i className="fas fa-file-alt text-white" />
                        </div>
                    </div>
                    <div>
                        <div className="small text-gray-500">tarih</div>
                        <span className="font-weight-bold">A new monthly report is ready to download!</span>
                    </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="/home">
                    <div className="mr-3">
                        <div className="icon-circle bg-success">
                            <i className="fas fa-donate text-white" />
                        </div>
                    </div>
                    <div>
                        <div className="small text-gray-500">December 7, 2019</div>
            $290.29 has been deposited into your account!
          </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="/home">
                    <div className="mr-3">
                        <div className="icon-circle bg-warning">
                            <i className="fas fa-exclamation-triangle text-white" />
                        </div>
                    </div>
                    <div>
                        <div className="small text-gray-500">December 2, 2019</div>
            Spending Alert: We've noticed unusually high spending for your account.
          </div>
                </a>
                <a className="dropdown-item text-center small text-gray-500" href="/home">Show All Alerts</a>
            </div>
    );
};