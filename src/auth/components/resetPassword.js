import React from 'react';


function ResetPassword() {
    
    return (
        <div className="col-lg-6 card o-hidden border-0 shadow-lg my-5">
          <div className="p-5">
            <div className="text-center">
            <h1 className="h4 text-gray-900 mb-4">Şifremi Sıfırla</h1>

            </div>
            <form className="user">
                    <input type="email" className="form-control form-control-user" id="eposta" name="eposta"
                        aria-describedby="emailHelp" placeholder="E-posta" />

                    <input type="date" className="form-control form-control-user " name="dogum_tarihi"
                        aria-describedby="emailHelp" placeholder="Doğum Tarihiniz" />
                    <br />
                    <button className="btn btn-primary btn-user btn-block"
                    >
                        İlerle
                </button>
                </form>
            <hr />
            <div className="text-center">
              <a className="small" href="/">Üye misiniz? Giriş Yap!</a>
            </div>
            <div className="text-center">
              <a to="register" className="small" href="/register">Yeni Hesap Oluştur</a>
            </div>
          </div>
        </div>
    );
};


export default ResetPassword;