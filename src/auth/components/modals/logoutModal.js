import React from 'react';


const logout = () => {
    document.cookie = "userToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

}

export default function logoutModal() {
    return (
        <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Çıkış yapmak istiyor musunuz?</h5>
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" onClick={e => {
                                document.getElementById("logoutModal").classList.remove('show');
                                document.getElementById("logoutModal").style.display = "none";
                            }}>×</span>
                        </button>
                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" data-dismiss="modal">İptal</button>
                        <a className="btn btn-primary" href="/" onClick={logout}>
                            Çıkış Yap</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
