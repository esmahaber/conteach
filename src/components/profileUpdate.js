import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onUpdateUserSubmit } from '../actions/registerActions'



class ProfileUpdate extends Component {

    state = {
        isim: sessionStorage.getItem("userName"),
        soyisim: sessionStorage.getItem("userLastname"),
        eposta: sessionStorage.getItem("userEposta"),
        dogum_tarihi: sessionStorage.getItem("userBirthDay"),
        ogr_no: sessionStorage.getItem("userStudNo")
    }


    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    onSubmit = (e) => {

        console.log(this.state);
        this.props.onUpdateUserSubmit(this.state);
    sessionStorage.setItem("userName", this.state.isim);
    sessionStorage.setItem("userLastname", this.state.soyisim);
    sessionStorage.setItem("userEposta", this.state.eposta);
    sessionStorage.setItem("userBirthDay", this.state.dogum_tarihi);
    sessionStorage.setItem("userStudNo", this.state.ogr_no);

    };


    render() {
        return (

            <div >

                <div>
                    <form className="card-body card mb-4 py-3 profileInfo" onChange={this.onChange} >

                        İsim:
                                  <input type="text" name="isim" className="inputClass" defaultValue={sessionStorage.getItem("userName")} />
                                  

                                    Soyisim:
                                    <input type="text" name="soyisim" className="inputClass" defaultValue={sessionStorage.getItem("userLastname")} />


                                    Email:
                                    <input type="text" name="eposta" className="inputClass" defaultValue={sessionStorage.getItem("userEposta")} />



                                    Öğrenci Numarası:
                                    <input type="text" name="ogr_no" className="inputClass" defaultValue={sessionStorage.getItem("userStudNo")} />


                                    Doğum Tarihi:
                                    <input type="date" name="dogum_tarihi" className="inputClass" defaultValue={sessionStorage.getItem("userBirthDay")} />

                                    Şifre:
                                    <input type="password" name="sifre" className="inputClass" placeholder="*****" />


                    </form>

                    <button href="#" className="btn btn-success btn-icon-split"
                        onClick={this.onSubmit}

                    >
                        Kaydet
                                </button>

                </div>
            </div>

        );
    };
};

const mapDispatchToProps = {
    onUpdateUserSubmit
};

export default connect(null, mapDispatchToProps)(ProfileUpdate);