import React from 'react';
import InputUser from './registerUserInput';

function registerForm () {
    return (
        <div className="col-lg-7 card o-hidden border-0 shadow-lg my-5">
            <div className="p-5">
                <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Hesap Oluştur</h1>
                </div>
                <InputUser/>
                <hr />
                <div className="text-center">
                    <a className="small" href="/reset-password">Şifreni mi unuttun?</a>
                </div>
                <div className="text-center">
                    <a className="small" href="/">Üye misiniz? Giriş Yap!</a>
                </div>
            </div>
        </div>
    );
};


export default registerForm;


