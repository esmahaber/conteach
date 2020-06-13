import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onNewUserSubmit } from '../actions/registerActions';
import InlineError from './InlineError'


let Errors = {};
class InputUser extends Component {
    constructor() {
        super();
        this.state = {
            isim: "",
            soyisim: "",
            eposta: "",
            dogum_tarihi: "",
            ogr_no: "",
            sifre: "",
            hasError: false
        }

    }

    onChange = (e) => {
        e.preventDefault();
        console.log([e.target.name] + "" + e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {

        // if (Object.keys(errors).length === 0) {
        //  this.props.onNewUserSubmit(this.state); }
        e.preventDefault();
        if ((e.target.sifre) === (e.target.tekrarSifre))
            this.props.onNewUserSubmit(this.state)
                .then(e => {
                    console.log(this.props.newUser.RegisterUser.error)
                    console.log(this.props.newUser.RegisterUser)
                    //console.log(this.props.newUser.RegisterUser)
                    if (!!this.props.newUser.RegisterUser.error) {
                        const errors = this.validate();
                        console.log(errors)

                        Errors = errors;
                        this.setState({
                            hasError: true
                        })

                    }
                })
                .then(e => {

                })

    };
    validate = () => {

        const errors = {};
       
        if (!!this.props.newUser.RegisterUser.error.errors)
            errors.title = this.props.newUser.RegisterUser.error.errors[0].msg
            if (!!this.props.newUser.RegisterUser.error.error)
            errors.title = this.props.newUser.RegisterUser.error.error
            
            return errors;
    };


    render() {
        const errors = Errors;
        return (
            <div className="col-lg-7 card o-hidden border-0 shadow-lg my-5">
                <div className="p-5">
                    <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Hesap Oluştur</h1>
                    </div>

                    <form className="user">
                        {errors.title && <InlineError message={errors.title} />}

                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" className="form-control form-control-user" name="isim" onChange={this.onChange} placeholder="İsim" />
                            </div>
                            <div className="col-sm-6">
                                <input type="text" className="form-control form-control-user" name="soyisim" onChange={this.onChange} placeholder="Soyisim" />
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control form-control-user" name="eposta" onChange={this.onChange} placeholder="Email Adresi" />
                        </div>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-user" name="dogum_tarihi" onChange={this.onChange} placeholder="Doğum Tarihiniz" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-user" name="ogr_no" onChange={this.onChange} placeholder="Öğrenci Numarası" />
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <input type="password" className="form-control form-control-user" name="sifre" onChange={this.onChange} placeholder="Şifre" />
                            </div>
                            <div className="col-sm-6">
                                <input type="password" className="form-control form-control-user" name="tekrarSifre" onChange={this.onChange} placeholder="Tekrar Şifre" />
                            </div>
                        </div>

                        <button className="btn btn-primary btn-user btn-block" onClick={this.onSubmit}>
                            Kaydol
 </button>

                    </form>
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
    }
}

const mapStateToProps = state => ({
    newUser: state
});
const mapDispatchToProps = {
    onNewUserSubmit
};
export default connect(mapStateToProps, mapDispatchToProps)(InputUser);
