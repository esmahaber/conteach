import React from 'react';

export default function ProfilePhoto ({onView}) {
        return (
                <div className="card" id="profileImg">
                    <img src="https://www.pngitem.com/pimgs/m/168-1689599_male-user-filled-icon-user-icon-100-x.png"
                    alt=""
                        className="card-img-top " />
                    <div className="card-body">
                        {
                            onView === 3 ?
                        <button className="btn btn-success btn-icon-split" style={{ width: '8rem' }}>Güncelle</button>
                        : null
                        
                        }
                    </div>
                </div>


        );
    };
