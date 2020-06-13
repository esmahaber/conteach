import React from 'react';
import { onNewUserSubmit } from '../actions/registerActions';
import { connect } from 'react-redux';



const onSubmit = (e) => {
console.log((e.target.sifre) === (e.target.tekrarSifre))
    if((e.target.sifre) === (e.target.tekrarSifre))
    this.props.onNewUserSubmit(this.state);

  };
const error =()=>{
    return
   /* {this.props.newUser.RegisterUser.error &&
        <div role="alert" className="fade alert alert-danger show"> Lütfen bilgilerinizi kontrol ediniz</div>
      }
      */
}

function registerForm (props) {
    console.log(props)
    return (
        
        
    );
};


const mapStateToProps = state => ({
    newUser: state
  });
  const mapDispatchToProps = {
    onNewUserSubmit
  };
  export default connect(mapStateToProps, mapDispatchToProps)(registerForm);


