import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onNewUserSubmit } from '../actions/registerActions';


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
      hasError: ""
    }

  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {

    // if (Object.keys(errors).length === 0) {
    //  this.props.onNewUserSubmit(this.state); }

    if((e.target.sifre) === (e.target.tekrarSifre))
    this.props.onNewUserSubmit(this.state);

  };


  render() {
    console.log("props", this.props.newUser.RegisterUser)

    return (
      <form className="user">
        {this.props.newUser.RegisterUser.error &&
          <div role="alert" className="fade alert alert-danger show"> Lütfen bilgilerinizi kontrol ediniz</div>
        }

        <div className="form-group row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <input type="text" className="form-control form-control-user" name="isim" onChange={this.onChange.bind(this)} placeholder="İsim" />
          </div>
          <div className="col-sm-6">
            <input type="text" className="form-control form-control-user" name="soyisim" onChange={this.onChange.bind(this)} placeholder="Soyisim" />
          </div>
        </div>
        <div className="form-group">
          <input type="email" className="form-control form-control-user" name="eposta" onChange={this.onChange.bind(this)} placeholder="Email Adresi" />
        </div>
        <div className="form-group">
          <input type="date" className="form-control form-control-user" name="dogum_tarihi" onChange={this.onChange.bind(this)} placeholder="Doğum Tarihiniz" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control form-control-user" name="ogr_no" onChange={this.onChange.bind(this)} placeholder="Öğrenci Numarası" />
        </div>
        <div className="form-group row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <input type="password" className="form-control form-control-user" name="sifre" onChange={this.onChange.bind(this)} placeholder="Şifre" />
          </div>
          <div className="col-sm-6">
            <input type="password" className="form-control form-control-user" name="tekrarSifre" placeholder="Tekrar Şifre" />
          </div>
        </div>

        <button className="btn btn-primary btn-user btn-block" onClick={this.onSubmit}>
          Kaydol
  </button>

      </form>
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
