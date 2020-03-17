import React, { Component } from 'react';
import { post } from '../../helpers/http.helper';
import { connect } from 'react-redux';
import { userLogin } from '../../actions/loginActions';


class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      eposta: "",
      sifre: "",
      hasError: false,
      errorMessage: ""
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })

    console.log(e.target.value);

  }

  onUserClick(e) {
    e.preventDefault();
    const kullanici = this.state;
    this.props.userLogin(kullanici);

  }
  render() {
    return (
      <div className="row ">
        <div className="col-lg-6 card o-hidden border-0 shadow-lg my-5">
          <div className="p-5">
            <div className="text-center">
            </div>
            <form className="user">
              <div className="form-group">
                <input type="email" className="form-control form-control-user" id="eposta" name="eposta" value={this.state.eposta} onChange={this.onChange.bind(this)} aria-describedby="emailHelp" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control form-control-user" id="password" name="sifre" value={this.state.sifre} onChange={this.onChange.bind(this)} placeholder="Şifre" />
              </div>
              <div className="form-group">
                <div className="custom-control custom-checkbox small">
                  <input type="checkbox" className="custom-control-input" id="customCheck" />
                  <label className="custom-control-label" htmlFor="customCheck">Beni Hatırla</label>
                </div>
              </div>
              <a href="#" className="btn btn-primary btn-user btn-block" onClick={this.onUserClick.bind(this)} >
                Giriş
        </a>
            </form>
            <hr />
            <div className="text-center">
              <a className="small" href="forgot-password.html">Şifremi Unuttum</a>
            </div>
            <div className="text-center">
              <a to="register" className="small" href="register.html">Yeni Hesap Al</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
};

const mapDispatchToProps = {
  userLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);