import React from 'react';


export default function profileInfo({ onChangeView }) {
   // let header = "Kullanıcı Bilgileri";
    return (
        <div>
            <div className="card-body card mb-4 py-3 profileInfo"
            >
                {sessionStorage.getItem("userName")} {sessionStorage.getItem("userLastname")}
                <hr />
                {sessionStorage.getItem("userEposta")}
                <hr />
                {sessionStorage.getItem("userStudNo")}
                <hr />
                {sessionStorage.getItem("userBirthDay")}
                <hr />

            </div>
            <button className="btn btn-success btn-icon-split"
                onClick={e => {
                    e.preventDefault();
                    onChangeView(3);
                }}
   >
                Bilgileri Güncelle
                                </button>
        </div>
    )
}


