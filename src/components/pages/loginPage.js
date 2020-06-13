import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../actions/loginActions';
import InlineError from '../InlineError';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';



class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      eposta: "",
      sifre: "",
      hasError: false,
      errors: ""
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }



  onUserClick(e) {
    e.preventDefault();
    this.props.userLogin(this.state)
    this.validate();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(prevState)
    console.log(nextProps)
    // document.cookie = "myNote=" + this.state.myNote
    if (nextProps.user.LoginUser.error !== prevState.errors)
      return ({ errors: nextProps.user.LoginUser.error }) // <- this is setState equivalent

    return null
  }


  validate = () => {
    let errors = "";

    if (this.props.user.LoginUser.error) {
      errors = this.props.user.LoginUser.error
      this.setState({
        errors
      });
    }
    return errors;
  };


  render() {


    const { errors } = this.state;
    const form = (
      <div className="col-lg-6 card o-hidden border-0 shadow-lg my-5">
        <div className="p-5">
          <div className="text-center">
            <h1 className="h4 text-gray-900 mb-4">Giriş Yap</h1>

          </div>
          <form className="user">
            {errors && <InlineError message={errors} />}
            <div className="form-group">
              <input type="email" className="form-control form-control-user" id="eposta" name="eposta"
                value={this.state.eposta}
                onChange={this.onChange.bind(this)}
                aria-describedby="emailHelp" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control form-control-user" id="password"
                name="sifre"
                value={this.state.sifre}
                onChange={this.onChange.bind(this)} placeholder="Şifre" />
            </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox small">
                <input type="checkbox" className="custom-control-input" id="customCheck" />
                <label className="custom-control-label" htmlFor="customCheck">Beni Hatırla</label>
              </div>
            </div>
            <button className="btn btn-primary btn-user btn-block" onClick={this.onUserClick.bind(this)} >
              Giriş
</button>
          </form>
          <hr />
          <div className="text-center">
            <a className="small" href="/reset-password">Şifremi Unuttum</a>
          </div>
          <div className="text-center">
            <a to="register" className="small" href="/register">Yeni Hesap Oluştur</a>
          </div>
        </div>
      </div>
    );
    return (
      <div className="row ">

        {
          this.props.user.LoginUser.done ?
            this.props.user.LoginUser.user.results[0].yetkili ? <Redirect to="/auth/home" /> : <Redirect to="/home" />
            : form

        }


      </div>
    );
  }
}

LoginPage.propTypes = {
  user: PropTypes.any
}

const mapStateToProps = state => ({
  user: state
});

const mapDispatchToProps = {
  userLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);